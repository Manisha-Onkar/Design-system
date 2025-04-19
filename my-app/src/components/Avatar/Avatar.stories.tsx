import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const FallbackText: Story = {
  args: {
    fallback: 'MO',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    fallback: 'K',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    fallback: '🧑‍💻',
    size: 'lg',
  },
};

