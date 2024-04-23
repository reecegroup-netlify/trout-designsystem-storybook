import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    // Order the controls
    controls: { sort: "requiredFirst" },
    // Center component
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelOnly: Story = {
  args: { label: "Something", inline: false },
};

export const LabelAndDescription: Story = {
  args: { label: "Username", description: "Get notified on new projects.", inline: false },
};

export const Error: Story = {
  args: { label: "Something", inline: false, isError: true, errorMessage: "This box is required." },
};
