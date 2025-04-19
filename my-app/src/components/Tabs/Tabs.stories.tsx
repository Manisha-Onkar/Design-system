import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args: {
    tabs: [
      { label : 'Home ', content : <p>This is the home tab content.</p> },
      { label: 'Profile', content: <p>This is the profile tab content.</p> },
      { label: 'Settings', content: <p>This is the settings tab content.</p> },
    ],
  },
};
