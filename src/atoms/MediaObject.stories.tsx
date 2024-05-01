import type { Meta, StoryObj } from "@storybook/react";
import { MediaObject } from "./MediaObject";

const meta = {
  title: "Atoms/MediaObject",
  component: MediaObject,
  parameters: {
    controls: { sort: "requiredFirst" },
    layout: "centered",
  },
  argTypes: {
    media: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof MediaObject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicAlignedTop: Story = {
  args: {
    media: (
      <svg
        className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
      </svg>
    ),
    mediaLocation: "top",
    headingContent: "Lorem ipsum",
    textContent:
      "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
  },
};

export const BasicAlignedCentre: Story = {
  args: {
    media: (
      <svg
        className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
      </svg>
    ),
    mediaLocation: "center",
    headingContent: "Lorem ipsum",
    textContent:
      "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
  },
};

export const BasicAlignedBottom: Story = {
  args: {
    media: (
      <svg
        className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
      </svg>
    ),
    mediaLocation: "bottom",
    headingContent: "Lorem ipsum",
    textContent:
      "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
  },
};

export const StretchedToFit: Story = {
  args: {
    media: (
      <svg
        className="h-full w-16 border border-gray-300 bg-white text-gray-300"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
      </svg>
    ),
    headingContent: "Lorem ipsum",
    textContent:
      "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
  },
};

export const MediaOnRight: Story = {
  args: {
    media: (
      <svg
        className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
      </svg>
    ),
    mediaSide: "right",
    headingContent: "Lorem ipsum",
    textContent:
      "Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.",
  },
};
