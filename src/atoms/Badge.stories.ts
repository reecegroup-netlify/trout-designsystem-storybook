import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "./Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    controls: { sort: "requiredFirst" },
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBorder: Story = {
  args: {
    label: "Badge",
    color: "gray",
    badgeStyle: "square",
    withBorder: true,
    withDot: false,
    removeButton: false,
  },
};

export const Flat: Story = {
  args: {
    label: "Badge",
    badgeStyle: "square",
    color: "gray",
    withBorder: false,
  },
};
