import type { Meta, StoryObj } from "@storybook/react";
import { Radio, type RadioProps } from "./Radio";

const meta = {
  title: "Core/Radio",
  component: Radio,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Radio Option",
  },
};
