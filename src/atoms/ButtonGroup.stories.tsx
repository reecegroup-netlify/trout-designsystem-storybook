import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup";

const meta = {
  title: "Atoms/ButtonGroup",
  component: ButtonGroup,
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyClick = () => null;
const item1: ButtonGroupItem = { content: "begin", clickHandler: dummyClick };
const item2: ButtonGroupItem = { content: "end", clickHandler: dummyClick };

export const WithWords: Story = { args: { groupItems: [item1, item2] } };

const iconItem1: ButtonGroupItem = {
  content: <ChevronLeftIcon className="h-4" />,
  clickHandler: dummyClick,
};
const iconItem2: ButtonGroupItem = {
  content: <ChevronRightIcon className="h-4" />,
  clickHandler: dummyClick,
};
export const WithIcons: Story = { args: { groupItems: [iconItem1, iconItem2] } };
