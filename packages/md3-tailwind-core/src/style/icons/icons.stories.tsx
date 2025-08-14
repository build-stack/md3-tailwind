import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconProps } from "./Icon";
import "material-symbols/rounded.css";
import "material-symbols/outlined.css";
import "material-symbols/sharp.css";

const meta = {
  title: "Style/Icons",
  component: Icon,
  args: {
    name: "home",
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FamiliesAndSizes: Story = {
  render: (args: IconProps) => (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 text-xs text-gray-500">Rounded</div>
        <div className="flex items-center gap-4">
          <Icon {...args} family="rounded" size={20} />
          <Icon {...args} family="rounded" size={24} />
          <Icon {...args} family="rounded" size={40} />
          <Icon {...args} family="rounded" size={48} />
          <Icon {...args} family="rounded" size={64} />
        </div>
      </div>
      <div>
        <div className="mb-2 text-xs text-gray-500">Outlined</div>
        <div className="flex items-center gap-4">
          <Icon {...args} family="outlined" size={20} />
          <Icon {...args} family="outlined" size={24} />
          <Icon {...args} family="outlined" size={40} />
          <Icon {...args} family="outlined" size={48} />
          <Icon {...args} family="outlined" size={64} />
        </div>
      </div>
      <div>
        <div className="mb-2 text-xs text-gray-500">Sharp</div>
        <div className="flex items-center gap-4">
          <Icon {...args} family="sharp" size={20} />
          <Icon {...args} family="sharp" size={24} />
          <Icon {...args} family="sharp" size={40} />
          <Icon {...args} family="sharp" size={48} />
          <Icon {...args} family="sharp" size={64} />
        </div>
      </div>
    </div>
  ),
};

export const FillWeightGrade: Story = {
  args: { family: "rounded", size: 24, name: "favorite" },
  render: (args: IconProps) => (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 text-xs text-gray-500">Fill</div>
        <div className="flex items-center gap-4">
          <Icon {...args} fill={0} />
          <Icon {...args} fill={1} />
        </div>
      </div>
      <div>
        <div className="mb-2 text-xs text-gray-500">Weight</div>
        <div className="flex items-center gap-4">
          <Icon {...args} weight={200} />
          <Icon {...args} weight={400} />
          <Icon {...args} weight={700} />
        </div>
      </div>
      <div>
        <div className="mb-2 text-xs text-gray-500">Grade</div>
        <div className="flex items-center gap-4">
          <Icon {...args} grade={-50} />
          <Icon {...args} grade={0} />
          <Icon {...args} grade={200} />
        </div>
      </div>
    </div>
  ),
};


