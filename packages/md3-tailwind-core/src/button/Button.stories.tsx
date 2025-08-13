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
    variant: "default",
  } satisfies ButtonProps,
};

export const Variants: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-3">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
      <Button {...args} variant="icon">Icon</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: ButtonProps) => (
    <div className="flex items-end gap-3">
      <Button {...args} size="xs">Extra Small</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Default</Button>
      <Button {...args} size="lg">Large</Button>      
      <Button {...args} size="xl">Common Large Button</Button>
      <Button {...args} size="icon" aria-label="Icon" title="Icon">★</Button>
    </div>
  ),
};


