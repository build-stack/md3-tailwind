import type { Meta, StoryObj } from "@storybook/react";
import { Radio, type RadioProps } from "./Radio";
import React from "react";

const meta = {
  title: "Core/Radio",
  component: Radio,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Radio – Material 3 Implementation

Radio buttons allow users to select one option from a set of mutually exclusive options. This implementation follows Material Design 3 specifications.

## Features
- ✅ Material 3 anatomy (container, selection dot, state layer)
- ✅ Proper interactive states (hover, focus, pressed, disabled)  
- ✅ 20×20dp radio with 48×48dp touch target
- ✅ Accessibility with ARIA attributes
- ✅ Error states and helper text
- ✅ RTL support ready

## Usage
Use radio buttons when users need to see all available options and can only select one. For multiple selections, use checkboxes instead.
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the radio is selected",
    },
    disabled: {
      control: "boolean", 
      description: "Whether the radio is disabled",
    },
    error: {
      control: "boolean",
      description: "Whether the radio is in error state",
    },
    label: {
      control: "text",
      description: "Text label for the radio button",
    },
    helperText: {
      control: "text", 
      description: "Supporting text shown below the label",
    },
    errorText: {
      control: "text",
      description: "Error message to display when error is true",
    },
    name: {
      control: "text",
      description: "Form name attribute - radios with same name form a group",
    },
    value: {
      control: "text",
      description: "Form value attribute",
    },
  },
  args: {
    label: "Radio Option",
    name: "example",
    value: "option1",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: "Default radio button",
    name: "default-example",
    value: "default",
  },
};

export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: "Selected radio button",
    name: "checked-example",
    value: "checked",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled radio button",
    disabled: true,
    name: "disabled-example",
    value: "disabled",
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled selected radio button",
    disabled: true,
    checked: true,
    name: "disabled-checked-example", 
    value: "disabled-checked",
  },
};

// With Helper Text
export const WithHelperText: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: "Radio with helper text",
    helperText: "This is additional information about this option",
    name: "helper-example",
    value: "helper",
  },
};

// Error States
export const ErrorState: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: "Radio with error",
    error: true,
    errorText: "This field is required",
    name: "error-example",
    value: "error",
  },
};

export const ErrorStateChecked: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: "Selected radio with error",
    error: true,
    errorText: "Invalid selection",
    name: "error-checked-example",
    value: "error-checked",
  },
};



// Radio Groups
export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState("option1");
    
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-on-surface">Choose your preferred option:</h3>
        <div className="space-y-3">
          <Radio
            name="group1"
            value="option1"
            label="First option"
            helperText="This is the first choice available"
            checked={selectedValue === "option1"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <Radio
            name="group1"
            value="option2"
            label="Second option" 
            helperText="This is an alternative choice"
            checked={selectedValue === "option2"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <Radio
            name="group1"
            value="option3"
            label="Third option"
            helperText="This is another possibility"
            checked={selectedValue === "option3"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <Radio
            name="group1"
            value="option4"
            label="Disabled option"
            helperText="This option is not available"
            disabled={true}
          />
        </div>
        <p className="text-xs text-slate-600">
          Selected value: {selectedValue}
        </p>
      </div>
    );
  },
};

export const RadioGroupWithErrors: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState("");
    const [hasError, setHasError] = React.useState(false);
    
    const handleSubmit = () => {
      if (!selectedValue) {
        setHasError(true);
      } else {
        setHasError(false);
        alert(`Selected: ${selectedValue}`);
      }
    };
    
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-on-surface">
          Select a required option: <span className="text-error">*</span>
        </h3>
        <div className="space-y-3">
          <Radio
            name="group2"
            value="small"
            label="Small size"
            error={hasError && !selectedValue}
            checked={selectedValue === "small"}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              setHasError(false);
            }}
          />
          <Radio
            name="group2"
            value="medium"
            label="Medium size"
            error={hasError && !selectedValue}
            checked={selectedValue === "medium"}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              setHasError(false);
            }}
          />
          <Radio
            name="group2"
            value="large"
            label="Large size"
            error={hasError && !selectedValue}
            checked={selectedValue === "large"}
            onChange={(e) => {
              setSelectedValue(e.target.value);
              setHasError(false);
            }}
          />
        </div>
        {hasError && (
          <p className="text-xs text-red-600">Please select an option</p>
        )}
        <button 
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-violet-600 text-white rounded-md text-sm font-medium hover:bg-violet-700"
        >
          Submit
        </button>
      </div>
    );
  },
};

// Interactive States Demo
export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-3">Interactive States</h3>
        <div className="space-y-3">
          <Radio
            name="states1"
            value="enabled"
            label="Enabled (hover/focus me)"
            helperText="Normal interactive state"
          />
          <Radio
            name="states1"
            value="selected"
            label="Selected"
            helperText="Radio button is selected"
            checked={true}
          />
          <Radio
            name="states1"
            value="disabled"
            label="Disabled"
            helperText="Cannot be interacted with"
            disabled={true}
          />
          <Radio
            name="states1"
            value="disabled-selected"
            label="Disabled + Selected"
            helperText="Disabled but shows selected state"
            disabled={true}
            checked={true}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-3">Error States</h3>
        <div className="space-y-3">
          <Radio
            name="states2"
            value="error"
            label="Error state"
            error={true}
            errorText="This selection has an error"
          />
          <Radio
            name="states2"
            value="error-selected"
            label="Error + Selected"
            error={true}
            checked={true}
            errorText="Selected option with error"
          />
        </div>
      </div>
    </div>
  ),
};

// Accessibility Demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">
          Keyboard Navigation Demo
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          Use Tab to move between groups, Arrow keys to select within a group, Space to select
        </p>
        
        <fieldset className="border border-slate-300 rounded-md p-4 mb-4">
          <legend className="text-sm font-medium px-2">Preferred Contact Method</legend>
          <div className="space-y-3 mt-2">
            <Radio
              name="contact"
              value="email"
              label="Email"
              helperText="We'll send updates via email"
            />
            <Radio
              name="contact"
              value="phone"
              label="Phone"
              helperText="We'll call you with updates"
            />
            <Radio
              name="contact"
              value="sms"
              label="SMS"
              helperText="We'll text you updates"
            />
          </div>
        </fieldset>
        
        <fieldset className="border border-slate-300 rounded-md p-4">
          <legend className="text-sm font-medium px-2">Newsletter Frequency</legend>
          <div className="space-y-3 mt-2">
            <Radio
              name="frequency"
              value="daily"
              label="Daily"
              helperText="Receive updates every day"
            />
            <Radio
              name="frequency"
              value="weekly"
              label="Weekly" 
              helperText="Receive updates once a week"
              checked={true}
            />
            <Radio
              name="frequency"
              value="monthly"
              label="Monthly"
              helperText="Receive updates once a month"
            />
            <Radio
              name="frequency"
              value="never"
              label="Never"
              helperText="Don't send me any updates"
            />
          </div>
        </fieldset>
      </div>
    </div>
  ),
};

// Layout Examples
export const LayoutExamples: Story = {
  render: () => {
    const [compactValue, setCompactValue] = React.useState("1");
    const [detailedValue, setDetailedValue] = React.useState("basic");
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-3">Compact Layout</h3>
          <div className="space-y-2">
            <Radio 
              name="compact" 
              value="1" 
              label="Option 1" 
              checked={compactValue === "1"}
              onChange={(e) => setCompactValue(e.target.value)}
            />
            <Radio 
              name="compact" 
              value="2" 
              label="Option 2" 
              checked={compactValue === "2"}
              onChange={(e) => setCompactValue(e.target.value)}
            />
            <Radio 
              name="compact" 
              value="3" 
              label="Option 3" 
              checked={compactValue === "3"}
              onChange={(e) => setCompactValue(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-slate-700 mb-3">With Detailed Information</h3>
          <div className="space-y-4">
            <Radio
              name="detailed"
              value="basic"
              label="Basic Plan - $9/month"
              helperText="Perfect for individuals. Includes 10GB storage, email support, and basic features."
              checked={detailedValue === "basic"}
              onChange={(e) => setDetailedValue(e.target.value)}
            />
            <Radio
              name="detailed"
              value="pro"
              label="Pro Plan - $29/month"
              helperText="Great for professionals. Includes 100GB storage, priority support, advanced features, and collaboration tools."
              checked={detailedValue === "pro"}
              onChange={(e) => setDetailedValue(e.target.value)}
            />
            <Radio
              name="detailed" 
              value="enterprise"
              label="Enterprise Plan - $99/month"
              helperText="Best for teams. Includes unlimited storage, 24/7 phone support, all features, custom integrations, and dedicated account manager."
              checked={detailedValue === "enterprise"}
              onChange={(e) => setDetailedValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  },
};