import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Order the controls
    controls: { sort: "requiredFirst" },
    // Center component
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    buttonType: "primary",
    buttonSize: "md",
    buttonStyle: "rounded",
    textColor: "light",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
    buttonSize: "md",
    buttonStyle: "rounded",
    textColor: "dark",
  },
};
