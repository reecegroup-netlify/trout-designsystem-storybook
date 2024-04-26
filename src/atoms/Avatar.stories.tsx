import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarNotification } from "./Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

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
