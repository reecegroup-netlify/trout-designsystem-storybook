import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { IconButton } from "./IconButton";
import { ArrowLongLeftIcon, ArrowLongRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/20/solid";

const meta = {
  title: "Atoms/Icon Button",
  component: IconButton,
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    buttonSize: "md",
    icon: <PlusIcon className="h-4 text-white" />,
  },
};

export const Large: Story = {
  args: {
    buttonSize: "lg",
    icon: <MinusIcon className="h-4 text-white" />,
  },
};
