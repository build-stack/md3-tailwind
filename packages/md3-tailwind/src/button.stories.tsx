import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { ThemeProvider } from './theme-provider';
import { useTheme } from './theme-provider';

// Import CSS tokens
import '@build-stack/md3-tailwind-core/tokens.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Material Design 3 Button component built with Tailwind CSS v4 and CVA for type-safe variants.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Button style variant'
    },
    size: {
      control: 'select', 
      options: ['sm', 'default', 'lg', 'icon'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button'
    },
    children: {
      control: 'text',
      description: 'Button content'
    }
  },
  decorators: [
    (Story) => (
      <div className="bg-surface text-surface-foreground p-4 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="filled">Filled</Button>
        <Button variant="filled-tonal">Filled Tonal</Button>
        <Button variant="elevated">Elevated</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button ripple variant="filled">Filled + Ripple</Button>
        <Button ripple variant="filled-tonal">Filled Tonal + Ripple</Button>
        <Button ripple variant="elevated">Elevated + Ripple</Button>
        <Button ripple variant="outlined">Outlined + Ripple</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🚀</Button>
    </div>
  ),
};

export const Ripple: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button ripple variant="filled">Filled</Button>
      <Button ripple variant="filled-tonal">Filled Tonal</Button>
      <Button ripple variant="elevated">Elevated</Button>
      <Button ripple variant="outlined">Outlined</Button>
      <Button ripple size="lg">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline">Outline Normal</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
    </div>
  ),
};

function LocalThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const next = resolvedTheme === 'dark' ? 'light' : 'dark';
  return (
    <Button variant="outline" size="sm" onClick={() => setTheme(next)}>
      Toggle to {next}
    </Button>
  );
}

export const WithThemeProvider: Story = {
  decorators: [
    (Story, context) => (
      <ThemeProvider defaultTheme={(context.globals as any).theme || 'light'}>
        <Story />
      </ThemeProvider>
    ),
  ],
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm">Using ThemeProvider component:</span>
        <LocalThemeToggle />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button ripple variant="filled">Filled</Button>
        <Button ripple variant="filled-tonal">Filled Tonal</Button>
        <Button ripple variant="elevated">Elevated</Button>
        <Button ripple variant="outlined">Outlined</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example using the ThemeProvider component. Use the Storybook toolbar theme toggle or the in-story button to change theme.'
      }
    }
  }
};
