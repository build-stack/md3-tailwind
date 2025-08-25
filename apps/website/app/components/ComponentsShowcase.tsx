import { Display, Body, Icon } from "@build-stack/md3-tailwind";
import { ComponentCard } from "./ComponentCard";

const availableComponents = [
  {
    name: "Button",
    description: "Material Design buttons with multiple variants",
    icon: <Icon name="smart_button" size={24} family="outlined" />,
  },
  {
    name: "Typography",
    description: "Display, Body, and other text components",
    icon: <Icon name="text_fields" size={24} family="outlined" />,
  },
  {
    name: "TextField",
    description: "Input fields with Material Design styling",
    icon: <Icon name="input" size={24} family="outlined" />,
  },
  {
    name: "Checkbox",
    description: "Checkbox inputs with proper states",
    icon: <Icon name="check_box" size={24} family="outlined" />,
  },
];

const comingSoonComponents = [
  {
    name: "Card",
    description: "Elevated and outlined card variants",
    icon: <Icon name="credit_card" size={24} family="outlined" />,
  },
  {
    name: "Chip",
    description: "Assist, filter, input, and suggestion chips",
    icon: <Icon name="label" size={24} family="outlined" />,
  },
  {
    name: "FAB",
    description: "Floating Action Button",
    icon: <Icon name="add_circle" size={24} family="outlined" />,
  },
  {
    name: "IconButton",
    description: "Compact buttons with icons",
    icon: <Icon name="radio_button_unchecked" size={24} family="outlined" />,
  },
  {
    name: "Select",
    description: "Dropdown selection component",
    icon: <Icon name="expand_more" size={24} family="outlined" />,
  },
  {
    name: "Radio",
    description: "Radio button selection",
    icon: <Icon name="radio_button_checked" size={24} family="outlined" />,
  },
  {
    name: "Switch",
    description: "Toggle switch component",
    icon: <Icon name="toggle_on" size={24} family="outlined" />,
  },
  {
    name: "Slider",
    description: "Range and value sliders",
    icon: <Icon name="tune" size={24} family="outlined" />,
  },
  {
    name: "Tabs",
    description: "Tabbed navigation component",
    icon: <Icon name="tab" size={24} family="outlined" />,
  },
  {
    name: "Dialog",
    description: "Modal dialogs and sheets",
    icon: <Icon name="dialogs" size={24} family="outlined" />,
  },
  {
    name: "Menu",
    description: "Dropdown menu component",
    icon: <Icon name="menu" size={24} family="outlined" />,
  },
  {
    name: "Tooltip",
    description: "Contextual tooltips",
    icon: <Icon name="help" size={24} family="outlined" />,
  },
];

export function ComponentsShowcase() {
  const totalComponents = availableComponents.length + comingSoonComponents.length;
  
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Body size="small" className="text-violet-600 font-semibold uppercase tracking-wide mb-4">
            Ready-to-use
          </Body>
          <Display size="medium" className="text-slate-900 font-bold mb-6">
            {totalComponents}+ Material Design 3 Components
          </Display>
          <Body size="large" className="text-slate-600 max-w-3xl mx-auto">
            Our ready-to-use MD3 Tailwind components, like buttons, inputs, cards, dialogs, and more, 
            will help you create beautiful, accessible interfaces for your React 19 projects in a fraction of the time!
          </Body>
        </div>

        {/* Available Components */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Available Now</h3>
              <Body size="medium" className="text-slate-600">
                Ready to use in your projects today
              </Body>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{availableComponents.length} components</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availableComponents.map((component) => (
              <ComponentCard
                key={component.name}
                name={component.name}
                description={component.description}
                available={true}
                icon={component.icon}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Components */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Coming Soon</h3>
              <Body size="medium" className="text-slate-600">
                More components in active development
              </Body>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>{comingSoonComponents.length} components</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {comingSoonComponents.map((component) => (
              <ComponentCard
                key={component.name}
                name={component.name}
                description={component.description}
                available={false}
                icon={component.icon}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl border border-slate-200">
          <Display size="small" className="text-slate-900 font-bold mb-4">
            Start Building Today
          </Display>
          <Body size="medium" className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get started with MD3 Tailwind and build beautiful, accessible React applications 
            with Material Design 3 components and Tailwind CSS v4.
          </Body>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/docs" 
              className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
            >
              View Documentation
            </a>
            <a 
              href="https://github.com/build-stack/md3-tailwind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Icon name="star" size={20} family="outlined" className="mr-2" />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
