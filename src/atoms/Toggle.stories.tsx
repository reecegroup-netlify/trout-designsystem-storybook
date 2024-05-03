import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import ToggleGroup from "./ToggleGroup";

const meta = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: {
    controls: { sort: "requiredFirst" },
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToggle: Story = {
  // @ts-ignore
  args: {},
};

// @ts-ignore
export const WithToggleGroup: Story = {
  render: () => {
    return (
      <ToggleGroup
        toggle={<Toggle withIcon={false} isShort={false} />}
        groupLabel="Available to hire"
        groupDescription="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia."
      />
    );
  },
};
