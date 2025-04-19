import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    content: 'I am a tooltip',  // Ensure the prop name matches TooltipProps
    children: <button>Hover me</button>,  // Wrap any element (e.g., button) as children
  },
};
