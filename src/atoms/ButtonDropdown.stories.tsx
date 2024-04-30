import type { Meta, StoryObj } from "@storybook/react";
import { ButtonDropdown } from "./ButtonDropdown";

const meta = {
  title: "Atoms/Button",
  component: ButtonDropdown,
  parameters: {
    controls: { sort: "requiredFirst" },
    layout: "centered",
  },
  argTypes: {
    groupItems: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ButtonDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyClick = () => null;
const dropdownSelections = [
  { content: "Save and schedule", clickHandler: dummyClick },
  { content: "Save and publish", clickHandler: dummyClick },
  { content: "Export PDF", clickHandler: dummyClick },
];

export const Dropdown: Story = { args: { groupItems: dropdownSelections } };
