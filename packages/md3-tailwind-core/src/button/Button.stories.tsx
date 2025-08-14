import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./Button";

const meta = {
  title: "Core/Button",
  component: Button,
  args: {
    children: "Button",
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "filled",
    size: "sm",
    shape: "rounded",
  } satisfies ButtonProps,
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-3">
      <Button {...args} variant="elevated">Elevated</Button>
      <Button {...args} variant="filled">Filled</Button>
      <Button {...args} variant="tonal">Tonal</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="text">Text</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-3">
      <Button {...args} variant="elevated">Elevated</Button>
      <Button {...args} variant="filled">Filled</Button>
      <Button {...args} variant="tonal">Tonal</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="text">Text</Button>
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

export const States: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Rest</span>
        <Button {...args}>Default</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Hover</span>
        <Button {...args}>Hover</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Focus</span>
        <Button {...args}>Focus</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Pressed</span>
        <Button {...args}>Pressed</Button>
      </div>
      <div className="flex flex-col items-start gap-1">
        <span className="text-xs text-gray-500">Disabled</span>
        <Button {...args} disabled>Disabled</Button>
      </div>
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


