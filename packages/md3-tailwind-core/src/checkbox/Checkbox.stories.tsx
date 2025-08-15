import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, type CheckboxProps } from "./Checkbox";

const meta = {
  title: "Core/Checkbox",
  component: Checkbox,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox",
  },
};
