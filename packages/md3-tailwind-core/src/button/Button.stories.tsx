import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";
import { Icon } from "../style/icons/Icon";

const meta = {
  title: "Core/Button",
  component: Button,
  args: {
    children: "Button",
    size: "sm",
    shape: "rounded",
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to show all states for a variant
const VariantStates = ({ variant, children, icon }: { variant: string; children: string; icon?: React.ReactNode }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold text-gray-800 capitalize">{variant}</h3>
    <div className="flex flex-wrap gap-3">
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Enabled</span>
        <Button variant={variant as any} icon={icon}>{children}</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Disabled</span>
        <Button variant={variant as any} icon={icon} disabled>{children}</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Hover</span>
        <Button variant={variant as any} icon={icon}>{children}</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Focus</span>
        <Button variant={variant as any} icon={icon}>{children}</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Pressed</span>
        <Button variant={variant as any} icon={icon}>{children}</Button>
      </div>
    </div>
  </div>
);

export const Variants: Story = {
  render: (args: ButtonProps) => (
    <div className="space-y-8">
      <VariantStates variant="elevated" children="Elevated" />
      <VariantStates variant="filled" children="Filled" />
      <VariantStates variant="tonal" children="Tonal" />
      <VariantStates variant="outline" children="Outline" />
      <VariantStates variant="text" children="Text" />
    </div>
  ),
};

export const VariantsWithIcons: Story = {
  render: (args: ButtonProps) => (
    <div className="space-y-8">
      <VariantStates variant="elevated" children="Elevated" icon={<Icon name="download" />} />
      <VariantStates variant="filled" children="Filled" icon={<Icon name="add" />} />
      <VariantStates variant="tonal" children="Tonal" icon={<Icon name="settings" />} />
      <VariantStates variant="outline" children="Outline" icon={<Icon name="edit" />} />
      <VariantStates variant="text" children="Text" icon={<Icon name="delete" />} />
    </div>
  ),
};

export const IconOnly: Story = {
  render: (args: ButtonProps) => (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800">Icon Only Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500">Elevated</span>
            <Button variant="elevated" icon={<Icon name="download" />} aria-label="Download" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500">Filled</span>
            <Button variant="filled" icon={<Icon name="add" />} aria-label="Add item" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500">Tonal</span>
            <Button variant="tonal" icon={<Icon name="settings" />} aria-label="Settings" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500">Outline</span>
            <Button variant="outline" icon={<Icon name="edit" />} aria-label="Edit" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500">Text</span>
            <Button variant="text" icon={<Icon name="delete" />} aria-label="Delete" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    shape: "rounded",
  },
  render: (args: ButtonProps) => (
    <div className="flex items-end gap-3">
      <Button {...args} size="xs">Extra Small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Default</Button>
      <Button {...args} size="lg">Large</Button>      
      <Button {...args} size="xl">Common Large Button</Button>
    </div>
  ),
};

export const AsChildLink: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-3">
      <Button asChild {...args}>
        <a href="#">Anchor as Button</a>
      </Button>
    </div>
  ),
};


