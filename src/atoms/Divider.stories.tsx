import type { Meta, StoryObj } from "@storybook/react";
import Divider, { LabelDivider } from "./Divider";

const meta = {
  title: "Atoms/Divider",
  component: LabelDivider,
  parameters: {
    // Order the controls
    controls: { sort: "requiredFirst" },
    // Center component
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof LabelDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelledDivider: Story = {
  args: { labelText: "Continue", labelLocation: "center", labelType: "label" },
};
