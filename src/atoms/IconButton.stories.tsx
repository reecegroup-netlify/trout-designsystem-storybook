import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconButton } from "./IconButton";
import { PlusIcon } from "@heroicons/react/24/solid";

const meta = {
  title: "Atoms/Button",
  component: IconButton,
  parameters: {
    // Order the controls
    controls: { sort: "requiredFirst" },
    // Center component
    layout: "centered",
  },
  args: { onClick: fn() },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconOnly: Story = {
  args: {
    buttonSize: "lg",
    icon: <PlusIcon className="h-4 text-white" />,
  },
};
