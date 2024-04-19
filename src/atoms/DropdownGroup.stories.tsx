import type { Meta, StoryObj } from "@storybook/react";
import { DropdownGroup } from "./DropdownGroup";

const meta = {
  title: "Atoms/DropdownGroup",
  component: DropdownGroup,
  parameters: {
    // Order the controls
    controls: { sort: "requiredFirst" },
    // Center component
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    groupItems: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof DropdownGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyClick = () => null;
const dropdownSelections = [
  { content: "Save and schedule", clickHandler: dummyClick },
  { content: "Save and publish", clickHandler: dummyClick },
  { content: "Export PDF", clickHandler: dummyClick },
];

export const WithDropdown: Story = { args: { groupItems: dropdownSelections } };
