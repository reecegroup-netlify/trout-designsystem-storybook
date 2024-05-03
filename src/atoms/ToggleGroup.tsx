import { ReactElement } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleGroup({
  toggle,
  groupLabel,
  groupDescription,
}: {
  toggle: ReactElement;
  groupLabel: string;
  groupDescription: string;
}) {
  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Switch.Label as="span" className="text-sm font-medium leading-6 text-gray-900" passive>
          {groupLabel}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {groupDescription}
        </Switch.Description>
      </span>
      {toggle}
    </Switch.Group>
  );
}
