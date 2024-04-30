import { cn } from "@/utils";
import { ReactElement } from "react";

export type ButtonGroupItem = {
  content: string | ReactElement;
  clickHandler: () => void;
};
export type ButtonGroupProps = {
  groupItems: [ButtonGroupItem, ButtonGroupItem, ...ButtonGroupItem[]];
};
export function ButtonGroup({ groupItems }: ButtonGroupProps) {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {groupItems.map((item, index) => {
        const isFirst = index === 0;
        const isLast = groupItems.length - 1 === index;

        return (
          <button
            type="button"
            className={cn(
              "text-secondary-900 ring-secondary-300 hover:bg-secondary-100 relative inline-flex items-center bg-white px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10",
              isFirst ? "rounded-l-md" : "-ml-px",
              isLast ? "rounded-r-md" : ""
            )}
            key={index}
            onClick={item.clickHandler}
          >
            {item.content}
          </button>
        );
      })}
    </span>
  );
}
