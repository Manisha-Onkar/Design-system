import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Default',
    color: 'default',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    color: 'success',
    icon: <FaCheckCircle />  // Added icon for Success badge
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    color: 'warning',
    icon: <FaExclamationCircle />  // Added icon for Warning badge
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    color: 'error',
    icon: <FaExclamationCircle />
  },
};
