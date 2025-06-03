import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Footer from '@organisms/shared/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <div className="bg-muted flex min-h-screen flex-col justify-end">
      <Footer />
    </div>
  ),
};
