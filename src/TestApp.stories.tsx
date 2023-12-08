import type { Meta, StoryObj } from "@storybook/react";

import { TestApp } from "./TestApp";

const meta: Meta<typeof TestApp> = {
  title: "ReactHtmlWhiteBoard",
  component: TestApp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TestApp>;

export default meta;

type Story = StoryObj<typeof TestApp>;

export const Primary: Story = {
  render: () => (
    <TestApp />
  ),
};
