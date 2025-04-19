import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

// Updated story with a proper `id`
export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        id="name-input" // ✅ Added for accessibility
        label="Name : "
        placeholder=" Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
