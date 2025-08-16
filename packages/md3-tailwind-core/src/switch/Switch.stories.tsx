import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
    label: "Uncontrolled Switch",
    helperText: "This switch manages its own state",
  },
};

export const DefaultChecked: Story = {
  args: {
    label: "Default Checked",
    defaultChecked: true,
    helperText: "This switch starts in the checked state",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Controlled Switch"
        helperText={`Current state: ${checked ? 'ON' : 'OFF'}`}
      />
    );
  },
};

export const WithIcon: Story = {
  args: {
    label: "Switch with Icon",
    icon: "✓",
    helperText: "This switch has an icon inside the handle",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch size="sm" label="Small Switch" />
      <Switch size="md" label="Medium Switch (Default)" />
      <Switch size="lg" label="Large Switch" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Default State" />
      <Switch label="Error State" error helperText="Something went wrong" />
      <Switch label="Success State" success helperText="Everything is good" />
      <Switch label="Disabled State" disabled />
      <Switch label="Disabled Checked" disabled defaultChecked />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [switches, setSwitches] = useState({
      notifications: true,
      darkMode: false,
      analytics: false,
    });

    const handleChange = (key: keyof typeof switches) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSwitches(prev => ({ ...prev, [key]: e.target.checked }));
    };

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Settings</h3>
        
        <Switch
          label="Enable Notifications"
          helperText="Receive push notifications about important updates"
          checked={switches.notifications}
          onChange={handleChange('notifications')}
        />
        
        <Switch
          label="Dark Mode"
          helperText="Switch to dark theme"
          checked={switches.darkMode}
          onChange={handleChange('darkMode')}
          icon={switches.darkMode ? "🌙" : "☀️"}
        />
        
        <Switch
          label="Analytics"
          helperText="Help us improve by sharing anonymous usage data"
          checked={switches.analytics}
          onChange={handleChange('analytics')}
        />
        
        <div className="mt-6 p-4 bg-slate-100 rounded-md">
          <h4 className="font-medium mb-2">Current Settings:</h4>
          <pre className="text-sm">
            {JSON.stringify(switches, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};
