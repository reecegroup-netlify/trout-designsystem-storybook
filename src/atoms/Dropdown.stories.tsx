import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownGroup, DropdownItem } from "./Dropdown";

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

export const Simple: Story = {
  //@ts-ignore
  args: {},
  render: () => (
    <Dropdown>
      <DropdownGroup>
        <DropdownItem text="Account settings" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Support" href="#"></DropdownItem>
        <DropdownItem text="License" href="#"></DropdownItem>
        <DropdownItem text="Sign out" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
    </Dropdown>
  ),
};

export const WithDividers: Story = {
  //@ts-ignore
  args: {},
  render: () => (
    <Dropdown>
      <DropdownGroup>
        <DropdownItem text="Edit" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Duplicate" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
      <DropdownGroup>
        <DropdownItem text="Archive" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Move" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
      <DropdownGroup>
        <DropdownItem text="Share" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Add to favourites" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
      <DropdownGroup>
        <DropdownItem text="Delete" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
    </Dropdown>
  ),
};

export const WithIcons: Story = {
  //@ts-ignore
  args: {},
  render: () => (
    <Dropdown>
      <DropdownGroup>
        <DropdownItem text="Edit" onClick={dummyClick} icon={<PencilSquareIcon />}></DropdownItem>
        <DropdownItem
          text="Duplicate"
          onClick={dummyClick}
          icon={<DocumentDuplicateIcon />}
        ></DropdownItem>
      </DropdownGroup>
      <DropdownGroup>
        <DropdownItem text="Archive" onClick={dummyClick} icon={<ArchiveBoxIcon />}></DropdownItem>
        <DropdownItem
          text="Move"
          onClick={dummyClick}
          icon={<ArrowRightCircleIcon />}
        ></DropdownItem>
      </DropdownGroup>
      <DropdownGroup>
        <DropdownItem text="Share" href="#" icon={<UserPlusIcon />}></DropdownItem>
        <DropdownItem
          text="Add to favourites"
          onClick={dummyClick}
          icon={<HeartIcon />}
        ></DropdownItem>
      </DropdownGroup>
      <DropdownGroup>
        <DropdownItem text="Delete" onClick={dummyClick} icon={<TrashIcon />}></DropdownItem>
      </DropdownGroup>
    </Dropdown>
  ),
};

export const WithMinimalIcon: Story = {
  //@ts-ignore
  args: {},
  render: () => (
    <Dropdown isMinimal={true}>
      <DropdownGroup>
        <DropdownItem text="Account settings" onClick={dummyClick}></DropdownItem>
        <DropdownItem text="Support" href="#"></DropdownItem>
        <DropdownItem text="License" href="#"></DropdownItem>
        <DropdownItem text="Sign out" onClick={dummyClick}></DropdownItem>
      </DropdownGroup>
    </Dropdown>
  ),
};
