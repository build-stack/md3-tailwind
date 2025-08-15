import type { Meta, StoryObj } from "@storybook/react";
import { Switch, type SwitchProps } from "./Switch";

const meta = {
  title: "Core/Switch",
  component: Switch,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Switch",
  },
};
