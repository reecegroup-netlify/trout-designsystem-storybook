import type { Meta, StoryObj } from "@storybook/react";
import { AvatarStack } from "./AvatarCombinations";
import { Avatar } from "./Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: AvatarStack,
  //@ts-ignore
  // Typing subcomponents in v8 seems to be bugged
  // https://github.com/storybookjs/storybook/issues/23170
  subcomponents: { Avatar },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomStack: Story = {
  //@ts-ignore
  // Typing subcomponents in v8 seems to be bugged
  // https://github.com/storybookjs/storybook/issues/23170
  args: {
    stackStyle: "bottom",
  },
  render: (args) => (
    <AvatarStack {...args}>
      <Avatar
        size="md"
        cornerStyle="circular"
        userInitials="JBM"
        withBorder={true}
        avatarImage="/shrek.jpg"
      ></Avatar>
      <Avatar
        size="md"
        cornerStyle="circular"
        userInitials="JBM"
        withBorder={true}
        avatarImage="/donkey.webp"
      ></Avatar>
      <Avatar
        size="md"
        cornerStyle="circular"
        userInitials="JBM"
        withBorder={true}
        avatarImage="/fiona.jpg"
      ></Avatar>
    </AvatarStack>
  ),
};

export const TopStack: Story = {
  //@ts-ignore
  // Typing subcomponents in v8 seems to be bugged
  // https://github.com/storybookjs/storybook/issues/23170
  args: {
    stackStyle: "top",
  },
  render: (args) => (
    <AvatarStack {...args}>
      <Avatar
        size="md"
        cornerStyle="circular"
        userInitials="JBM"
        withBorder={true}
        avatarImage="/shrek.jpg"
      ></Avatar>
      <Avatar
        size="md"
        cornerStyle="circular"
        userInitials="JBM"
        withBorder={true}
        avatarImage="/donkey.webp"
      ></Avatar>
      <Avatar
        size="md"
        cornerStyle="circular"
        userInitials="JBM"
        withBorder={true}
        avatarImage="/fiona.jpg"
      ></Avatar>
    </AvatarStack>
  ),
};
