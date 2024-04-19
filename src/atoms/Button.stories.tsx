import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

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
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    buttonType: "primary",
    buttonSize: "md",
    buttonStyle: "rounded",
    textColor: "white",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    label: "Button",
    buttonType: "primary",
    buttonSize: "md",
    buttonStyle: "rounded",
    textColor: "white",
    icon: <ArrowLongLeftIcon className="h-4 self-center" />,
    iconPosition: "leading",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
    buttonSize: "md",
    buttonStyle: "rounded",
    textColor: "black",
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    label: "Button",
    buttonType: "secondary",
    buttonSize: "md",
    buttonStyle: "rounded",
    textColor: "black",
    icon: <ArrowLongRightIcon className="h-4 self-center" />,
    iconPosition: "trailing",
  },
};
