import { cn } from "@/utils";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

type DropdownButtonGroupItem = {
  content: string;
  clickHandler: () => void;
};
interface DropdownProps {
  groupItems: DropdownButtonGroupItem[];
}

export function DropdownGroup({ groupItems }: DropdownProps) {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="bg-white text-gray-900 ring-gray-300 hover:bg-secondary-100 relative inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10"
        onClick={groupItems[0].clickHandler}
      >
        {groupItems[0].content}
      </button>
      <Menu as="div" className="relative -ml-px block">
        <Menu.Button className="bg-white text-gray-400 ring-gray-300 hover:bg-gray-50 relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset focus:z-10">
          <span className="sr-only">Open options</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-white ring-black absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {groupItems.slice(1).map((item) => (
                <Menu.Item key={item.content}>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={item.clickHandler}
                      className={cn(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "w-full px-4 py-2 text-sm"
                      )}
                    >
                      {item.content}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
