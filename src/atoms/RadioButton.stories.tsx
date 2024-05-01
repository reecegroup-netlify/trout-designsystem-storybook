import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { RadioGroup } from "./RadioButton";

const meta = {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  // @ts-ignore
  subcomponents: RadioButton,
  parameters: {
    controls: { sort: "requiredFirst" },
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRadio: Story = {
  // @ts-ignore
  args: { groupHeading: "Do you accept our T&Cs?" },
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <RadioButton id="accept" label="Accept" groupName="tandcs" />
      </RadioGroup>
    );
  },
};

export const DisabledRadio: Story = {
  // @ts-ignore
  args: { groupHeading: "Do you want a cookie?" },
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <RadioButton
          id="cookie"
          label="Only one answer: Yes"
          groupName="ofc"
          defaultChecked
          isDisabled
        />
      </RadioGroup>
    );
  },
};

export const SimpleList = {
  args: {},
  render: () => {
    return (
      <RadioGroup groupHeading="Contact method">
        <RadioButton id="email" label="Email" groupName="notification" defaultChecked />
        <RadioButton id="sms" label="Phone (SMS)" groupName="notification" />
        <RadioButton id="push" label="Push notification" groupName="notification" />
      </RadioGroup>
    );
  },
};

export const ListWithDescription = {
  args: {},
  render: () => {
    return (
      <RadioGroup groupHeading="Computer specs">
        <RadioButton
          id="small"
          label="Small"
          groupName="specs"
          defaultChecked
          description="4 GB RAM / 2 CPUS / 80 GB SSD Storage"
        />
        <RadioButton
          id="medium"
          label="Medium"
          groupName="specs"
          description="8 GB RAM / 4 CPUS / 160 GB SSD Storage"
        />
        <RadioButton
          id="large"
          label="Large"
          groupName="specs"
          description="8 GB RAM / 4 CPUS / 160 GB SSD Storage"
        />
      </RadioGroup>
    );
  },
};

export const ListWithInlineDescription = {
  args: {},
  render: () => {
    return (
      <RadioGroup groupHeading="Computer specs">
        <RadioButton
          id="small"
          label="Small"
          groupName="specs2"
          defaultChecked
          description="4 GB RAM / 2 CPUS / 80 GB SSD Storage"
          descriptionInline
        />
        <RadioButton
          id="medium"
          label="Medium"
          groupName="specs2"
          description="8 GB RAM / 4 CPUS / 160 GB SSD Storage"
          descriptionInline
        />
        <RadioButton
          id="large"
          label="Large"
          groupName="specs2"
          description="8 GB RAM / 4 CPUS / 160 GB SSD Storage"
          descriptionInline
        />
      </RadioGroup>
    );
  },
};
