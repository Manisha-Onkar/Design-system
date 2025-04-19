import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

// Define the metadata for your story
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

// Define a type for your story
type Story = StoryObj<typeof Card>;

// Basic card story
export const Basic: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the card content. It can contain text, links, or other elements.',
  },
};

// Card with a footer containing a button
export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    content: 'Here is some content inside the card.',
    footer: <Button label="Action" primary />,
  },
};
