import { cn } from "../utils";
import { ReactElement } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

type BUTTON_SIZE = "sm" | "md" | "lg";

type IconButtonProps = {
  /**
   * What size is it?
   */
  buttonSize: BUTTON_SIZE;
  icon: ReactElement;

  onClick?: () => void;
};

/**
 * An icon-only button. The icon can be configured by developers.
 */
export function IconButton({ buttonSize, icon, onClick }: IconButtonProps) {
  const styleSizeMap = {
    "p-1": buttonSize === "sm",
    "p-1.5": buttonSize === "md",
    "p-2": buttonSize === "lg",
  };

  const colorOptions = "bg-primary hover:bg-primary/80";

  return (
    <button
      type="button"
      className={cn(
        // Default
        "rounded-full shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        styleSizeMap,
        colorOptions
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
