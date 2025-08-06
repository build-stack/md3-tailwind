#!/usr/bin/env node

/**
 * create-build-stack
 * Project scaffolder for Build Stack projects with Material Design 3 components
 */

import { program } from 'commander';
import { prompt } from 'enquirer';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import kleur from 'kleur';
import ora from 'ora';
import validateNpmName from 'validate-npm-package-name';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ProjectOptions {
  name: string;
  template: string;
  typescript: boolean;
  directory?: string;
}

const SUPPORTED_TEMPLATES = [
  { name: 'react-vite', title: 'React + Vite', description: 'React with Vite bundler' },
  { name: 'react-cra', title: 'Create React App', description: 'Traditional CRA setup' },
  { name: 'nextjs', title: 'Next.js', description: 'React framework with SSR' },
  { name: 'remix', title: 'Remix', description: 'Full-stack React framework' },
  { name: 'html', title: 'Vanilla HTML', description: 'Pure HTML/CSS/JS' },
];

async function main() {
  console.log(kleur.bold().blue('🚀 Create Build Stack Project'));
  console.log(kleur.gray('Material Design 3 components for modern web apps\n'));

  program
    .name('create-build-stack')
    .description('Create a new project with Build Stack components')
    .version('0.1.0')
    .argument('[project-name]', 'Project name')
    .option('-t, --template <template>', 'Project template')
    .option('--typescript', 'Use TypeScript')
    .option('--javascript', 'Use JavaScript')
    .action(async (projectName, options) => {
      try {
        await createProject(projectName, options);
      } catch (error) {
        console.error(kleur.red('❌ Error:'), error.message);
        process.exit(1);
      }
    });

  await program.parseAsync(process.argv);
}

async function createProject(projectName?: string, cmdOptions: any = {}) {
  let projectOptions: ProjectOptions = {
    name: '',
    template: '',
    typescript: false,
  };

  // Get project name
  if (!projectName) {
    const nameResponse = await prompt<{ name: string }>({
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
      validate: (input: string) => {
        if (!input.trim()) return 'Project name is required';
        const validation = validateNpmName(input);
        if (!validation.validForNewPackages) {
          return validation.errors?.[0] || validation.warnings?.[0] || 'Invalid project name';
        }
        return true;
      },
    });
    projectOptions.name = nameResponse.name.trim();
  } else {
    const validation = validateNpmName(projectName);
    if (!validation.validForNewPackages) {
      throw new Error(validation.errors?.[0] || validation.warnings?.[0] || 'Invalid project name');
    }
    projectOptions.name = projectName;
  }

  // Get template
  if (!cmdOptions.template) {
    const templateResponse = await prompt<{ template: string }>({
      type: 'select',
      name: 'template',
      message: 'Select a template:',
      choices: SUPPORTED_TEMPLATES.map(t => ({
        name: t.name,
        message: `${t.title} - ${kleur.gray(t.description)}`,
      })),
    });
    projectOptions.template = templateResponse.template;
  } else {
    if (!SUPPORTED_TEMPLATES.find(t => t.name === cmdOptions.template)) {
      throw new Error(`Template "${cmdOptions.template}" is not supported`);
    }
    projectOptions.template = cmdOptions.template;
  }

  // Get TypeScript preference (only for applicable templates)
  const supportsTypeScript = !projectOptions.template.includes('html');
  if (supportsTypeScript && !cmdOptions.typescript && !cmdOptions.javascript) {
    const tsResponse = await prompt<{ typescript: boolean }>({
      type: 'confirm',
      name: 'typescript',
      message: 'Use TypeScript?',
      initial: true,
    });
    projectOptions.typescript = tsResponse.typescript;
  } else {
    projectOptions.typescript = !!cmdOptions.typescript;
  }

  // Set project directory
  projectOptions.directory = path.resolve(process.cwd(), projectOptions.name);

  // Check if directory exists
  if (await fs.pathExists(projectOptions.directory)) {
    const overwriteResponse = await prompt<{ overwrite: boolean }>({
      type: 'confirm',
      name: 'overwrite',
      message: `Directory "${projectOptions.name}" already exists. Overwrite?`,
      initial: false,
    });

    if (!overwriteResponse.overwrite) {
      console.log(kleur.yellow('❌ Project creation cancelled'));
      return;
    }

    await fs.remove(projectOptions.directory);
  }

  // Create project
  await scaffoldProject(projectOptions);
}

async function scaffoldProject(options: ProjectOptions) {
  const spinner = ora('Creating project...').start();

  try {
    // Create project directory
    await fs.ensureDir(options.directory!);

    // Copy template files
    const templateDir = path.join(__dirname, '../templates', getTemplateName(options));
    
    if (!(await fs.pathExists(templateDir))) {
      throw new Error(`Template "${options.template}" not found`);
    }

    spinner.text = 'Copying template files...';
    await fs.copy(templateDir, options.directory!);

    // Process template files
    spinner.text = 'Processing template...';
    await processTemplate(options);

    // Install dependencies
    spinner.text = 'Installing dependencies...';
    await installDependencies(options.directory!);

    spinner.succeed(kleur.green('✅ Project created successfully!'));

    // Show next steps
    showNextSteps(options);

  } catch (error) {
    spinner.fail(kleur.red('❌ Failed to create project'));
    throw error;
  }
}

function getTemplateName(options: ProjectOptions): string {
  const suffix = options.typescript ? '-ts' : '-js';
  return options.template === 'html' ? 'html' : `${options.template}${suffix}`;
}

async function processTemplate(options: ProjectOptions) {
  const packageJsonPath = path.join(options.directory!, 'package.json');
  
  if (await fs.pathExists(packageJsonPath)) {
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = options.name;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
  }

  // Process other template files if needed
  const filesToProcess = [
    'README.md',
    'index.html',
  ];

  for (const file of filesToProcess) {
    const filePath = path.join(options.directory!, file);
    if (await fs.pathExists(filePath)) {
      let content = await fs.readFile(filePath, 'utf8');
      content = content.replace(/{{PROJECT_NAME}}/g, options.name);
      content = content.replace(/{{PROJECT_TITLE}}/g, toTitleCase(options.name));
      await fs.writeFile(filePath, content);
    }
  }
}

async function installDependencies(projectDir: string) {
  const { spawn } = await import('child_process');
  
  return new Promise((resolve, reject) => {
    const packageManager = 'npm'; // Could detect preferred package manager
    const child = spawn(packageManager, ['install'], {
      cwd: projectDir,
      stdio: 'pipe',
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Package installation failed with code ${code}`));
      } else {
        resolve(void 0);
      }
    });

    child.on('error', reject);
  });
}

function showNextSteps(options: ProjectOptions) {
  console.log('\n' + kleur.bold().blue('🎉 Next steps:'));
  console.log(`  ${kleur.cyan('cd')} ${options.name}`);
  
  switch (options.template) {
    case 'react-vite':
      console.log(`  ${kleur.cyan('npm run dev')}`);
      break;
    case 'react-cra':
      console.log(`  ${kleur.cyan('npm start')}`);
      break;
    case 'nextjs':
      console.log(`  ${kleur.cyan('npm run dev')}`);
      break;
    case 'remix':
      console.log(`  ${kleur.cyan('npm run dev')}`);
      break;
    case 'html':
      console.log(`  ${kleur.cyan('npm run dev')}`);
      break;
  }

  console.log('\n' + kleur.bold().green('Happy coding! 🚀'));
  console.log(kleur.gray('Documentation: https://build-stack.dev'));
}

function toTitleCase(str: string): string {
  return str.replace(/[-_]/g, ' ').replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

// Run the CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(kleur.red('❌ Unexpected error:'), error);
    process.exit(1);
  });
}

export { createProject, SUPPORTED_TEMPLATES };