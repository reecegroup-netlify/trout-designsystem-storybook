import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarNotification } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Rounded: Story = {
  args: {
    size: "md",
    cornerStyle: "rounded",
    userInitials: "JBM",
    avatarImage:
      "https://all-images.ai/wp-content/uploads/2024/01/19c7bf28-28cd-4988-b6b8-653ed83275cb.jpg",
  },
};

export const CircularWithPlaceholder: Story = {
  args: {
    size: "md",
    cornerStyle: "circular",
    userInitials: "JBM",
  },
};

export const RoundedWithTopNotif: Story = {
  args: {
    size: "md",
    cornerStyle: "rounded",
    userInitials: "JBM",
    avatarImage:
      "https://all-images.ai/wp-content/uploads/2024/01/19c7bf28-28cd-4988-b6b8-653ed83275cb.jpg",
    children: (
      <AvatarNotification size="md" status="positive" location="top" cornerStyle="rounded" />
    ),
  },
};

export const CircularWithTopNotif: Story = {
  args: {
    size: "md",
    cornerStyle: "circular",
    userInitials: "JBM",
    avatarImage:
      "https://all-images.ai/wp-content/uploads/2024/01/19c7bf28-28cd-4988-b6b8-653ed83275cb.jpg",
    children: (
      <AvatarNotification size="md" status="negative" location="top" cornerStyle="circular" />
    ),
  },
};

export const RoundedWithBottomNotif: Story = {
  args: {
    size: "md",
    cornerStyle: "rounded",
    userInitials: "JBM",
    avatarImage:
      "https://all-images.ai/wp-content/uploads/2024/01/19c7bf28-28cd-4988-b6b8-653ed83275cb.jpg",
    children: (
      <AvatarNotification size="md" status="neutral" location="bottom" cornerStyle="rounded" />
    ),
  },
};

export const CircularWithBottomNotif: Story = {
  args: {
    size: "md",
    cornerStyle: "circular",
    userInitials: "JBM",
    avatarImage:
      "https://all-images.ai/wp-content/uploads/2024/01/19c7bf28-28cd-4988-b6b8-653ed83275cb.jpg",
    children: (
      <AvatarNotification size="md" status="neutral" location="bottom" cornerStyle="circular" />
    ),
  },
};
