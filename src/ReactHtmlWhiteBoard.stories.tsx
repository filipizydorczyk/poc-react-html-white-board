import type { Meta, StoryObj } from '@storybook/react';

import { ReactHtmlWhiteBoard } from './ReactHtmlWhiteBoard';

const meta = {
  title: 'ReactHtmlWhiteBoard',
  component: ReactHtmlWhiteBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReactHtmlWhiteBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

