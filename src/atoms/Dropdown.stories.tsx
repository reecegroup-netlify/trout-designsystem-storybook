import type { Meta, StoryObj } from "@storybook/react";
import { DropdownItem, DropdownGroup, Dropdown } from "./Dropdown";

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  //@ts-ignore
  subcomponents: [DropdownGroup, DropdownItem],
  parameters: {
    controls: { sort: "requiredFirst" },
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyClick = () => null;

export const DefaultDropdown: Story = {
  //@ts-ignore
  args: {},
  render: () => (
    <Dropdown>
      <DropdownGroup>
        <DropdownItem text="Edit" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Share" href="#"></DropdownItem>
        <DropdownItem text="Save & quit" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Quit without saving" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
    </Dropdown>
  ),
};
