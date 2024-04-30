import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    controls: { sort: "requiredFirst" },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelledDivider: Story = {
  args: { variant: "text", labelText: "Continue", labelLocation: "center", labelType: "label" },
};

export const IconDivider: Story = {
  args: { variant: "icon", labelLocation: "center", icon: <PlusCircleIcon className="h-5" /> },
};
