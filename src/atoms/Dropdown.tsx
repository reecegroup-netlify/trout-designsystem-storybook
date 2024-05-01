import { cn } from "@/utils";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Fragment, ReactElement } from "react";

type ButtonDropdownItem = {
  onClick: () => void;
  href?: never;
};

type AnchorDropdownItem = {
  href: string;
  onClick?: never;
};

type DropdownItemProps = (ButtonDropdownItem | AnchorDropdownItem) & {
  text: string;
  icon?: JSX.Element;
};

export function DropdownItem(props: DropdownItemProps) {
  const Element = props.href ? "a" : "button";
  const isButton = Element === "button";
  return (
    <Menu.Item>
      {({ active }) => (
        <Element
          type={isButton ? "button" : undefined}
          href={!isButton ? props.href : undefined}
          onClick={isButton ? props.onClick : undefined}
          className={cn(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "flex w-full px-4 py-2 text-left text-sm"
          )}
        >
          {props.icon &&
            React.cloneElement(props.icon, {
              className: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500",
            })}
          {props.text}
        </Element>
      )}
    </Menu.Item>
  );
}

export function DropdownGroup({ children }: { children: ReactElement | ReactElement[] }) {
  return <div className="py-1">{children}</div>;
}

export function Dropdown({
  children,
  isMinimal,
}: {
  children: ReactElement | ReactElement[];
  isMinimal?: boolean;
}) {
  const buttonStyles = isMinimal
    ? "flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
    : "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={buttonStyles}>
          {/* TODO: specify if first option should show or if there should be a header. ALlow header as prop */}
          {isMinimal ? null : "Options"}
          {isMinimal ? (
            <>
              <span className="sr-only">Open options</span>
              <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </>
          ) : (
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
