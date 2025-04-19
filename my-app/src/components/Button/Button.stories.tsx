import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },  // Control the background color dynamically in Storybook
    onClick: { action: 'clicked' },  // Adds an action logger for the onClick event
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Primary button story
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

// Secondary button story
export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
};

// Large button story
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

// Small button story
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
