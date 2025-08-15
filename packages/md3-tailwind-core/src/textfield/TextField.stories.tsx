import type { Meta, StoryObj } from "@storybook/react";
import { TextField, type TextFieldProps } from "./TextField";
import { Icon } from "../style/icons/Icon";

const meta = {
  title: "Core/TextField",
  component: TextField,
  args: {
    placeholder: "Enter text...",
    variant: "filled",
    density: "md",
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: "A versatile text input component with Material Design 3 styling, supporting filled, outlined, and standard variants with smooth label animations.",
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text Field",
    placeholder: "Enter text...",
    value: "Hello World",
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Filled Variant with Icons</h3>
        <div className="space-y-4">
          <TextField 
            label="Left Icon Only" 
            variant="filled"
            leftIcon={<Icon name="person" size={24} family="outlined" weight={200} />}
            placeholder="Enter your name"
          />
          <TextField 
            label="Right Icon Only" 
            variant="filled"
            rightIcon={<Icon name="visibility" size={24} />}
            placeholder="Enter password"
          />
          <TextField 
            label="Both Icons" 
            variant="filled"
            leftIcon={<Icon name="search" size={24} family="outlined" weight={200} />}
            rightIcon={<Icon name="clear" size={24} family="outlined" weight={200} />}
            placeholder="Search with icons..."
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Outlined Variant with Icons</h3>
        <div className="space-y-4">
          <TextField 
            label="Left Icon Only" 
            variant="outlined"
            leftIcon={<Icon name="email" size={24} family="outlined" weight={200} />}
            placeholder="Enter your email"
          />
          <TextField 
            label="Right Icon Only" 
            variant="outlined"
            rightIcon={<Icon name="visibility" size={24} />}
            placeholder="Enter password"
          />
          <TextField 
            label="Both Icons" 
            variant="outlined"
            leftIcon={<Icon name="search" size={24} family="outlined" weight={200} />}
            rightIcon={<Icon name="clear" size={24} family="outlined" weight={200} />}
            placeholder="Search with icons..."
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Standard Variant with Icons</h3>
        <div className="space-y-4">
          <TextField 
            label="Left Icon Only" 
            variant="standard"
            leftIcon={<Icon name="phone" size={24} family="outlined" weight={200} />}
            placeholder="Enter phone number"
          />
          <TextField 
            label="Right Icon Only" 
            variant="standard"
            rightIcon={<Icon name="visibility" size={24} />}
            placeholder="Enter password"
          />
          <TextField 
            label="Both Icons" 
            variant="standard"
            leftIcon={<Icon name="search" size={24} family="outlined" weight={200} />}
            rightIcon={<Icon name="clear" size={24} family="outlined" weight={200} />}
            placeholder="Search with icons..."
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comprehensive showcase of all icon combinations (left only, right only, both) with each variant (filled, outlined, standard).",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Filled Variant</h3>
        <div className="space-y-4">
          <TextField 
            label="Small Density" 
            variant="filled"
            density="sm"
            placeholder="Small filled input..."
          />
          <TextField 
            label="Medium Density" 
            variant="filled"
            density="md"
            placeholder="Medium filled input..."
          />
          <TextField 
            label="Large Density" 
            variant="filled"
            density="lg"
            placeholder="Large filled input..."
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Outlined Variant</h3>
        <div className="space-y-4">
          <TextField 
            label="Small Density" 
            variant="outlined"
            density="sm"
            placeholder="Small outlined input..."
          />
          <TextField 
            label="Medium Density" 
            variant="outlined"
            density="md"
            placeholder="Medium outlined input..."
          />
          <TextField 
            label="Large Density" 
            variant="outlined"
            density="lg"
            placeholder="Large outlined input..."
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Standard Variant</h3>
        <div className="space-y-4">
          <TextField 
            label="Small Density" 
            variant="standard"
            density="sm"
            placeholder="Small standard input..."
          />
          <TextField 
            label="Medium Density" 
            variant="standard"
            density="md"
            placeholder="Medium standard input..."
          />
          <TextField 
            label="Large Density" 
            variant="standard"
            density="lg"
            placeholder="Large standard input..."
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All three variants (filled, outlined, standard) with all density options (small, medium, large) for comprehensive comparison.",
      },
    },
  },
};
