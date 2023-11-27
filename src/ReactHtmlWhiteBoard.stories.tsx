import type { Meta, StoryObj } from "@storybook/react";

import { ReactHtmlWhiteBoard } from "./ReactHtmlWhiteBoard";

const meta: Meta<typeof ReactHtmlWhiteBoard> = {
  title: "ReactHtmlWhiteBoard",
  component: ReactHtmlWhiteBoard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ReactHtmlWhiteBoard>;

export default meta;

type Story = StoryObj<typeof ReactHtmlWhiteBoard>;

export const Primary: Story = {
  render: () => (
    <ReactHtmlWhiteBoard size={[600,600]} />
  ),
};
