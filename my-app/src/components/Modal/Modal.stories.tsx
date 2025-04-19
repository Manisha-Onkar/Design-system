import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    isOpen: true,
    title: 'Sample Modal Title',
    content: 'This is the content of the modal.',
    onClose: () => alert('Modal closed'),
    children: <div>You can place any custom React node here.</div>,
  },
};
