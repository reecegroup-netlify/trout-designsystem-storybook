import { cn } from "@/utils";
import { ReactElement } from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

type BUTTON_TYPES = "primary" | "secondary" | "soft";
type BUTTON_STYLES = "square" | "rounded";
type BUTTON_SIZE = "xs" | "sm" | "md" | "lg" | "xl";
type TEXT_COLOR = "light" | "dark" | "grey";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * What type is it?
   */
  buttonType: BUTTON_TYPES;
  /**
   * What style is it?
   */
  buttonStyle: BUTTON_STYLES;
  /**
   * What size is it?
   */
  buttonSize: BUTTON_SIZE;
  /**
   * What size is it?
   */
  textColor: TEXT_COLOR;
  /**
   * Is there an icon
   */
  icon?: ReactElement;
  /**
   * What position is the icon in?
   */
  // TODO: make this conditionally required depending on icon
  iconPosition?: ICON_POSITION;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

type ICON_POSITION = "leading" | "trailing";

/**
 * Main element of interaction
 */
export function Button({
  label,
  buttonType,
  buttonStyle,
  buttonSize,
  textColor,
  icon,
  iconPosition,
  onClick,
  ...props
}: ButtonProps) {
  const styleSizeMap = {
    "px-2 py-1 text-xs": buttonSize === "xs",
    "px-2 py-1 text-sm": buttonSize === "sm",
    "px-2.5 py-1.5 text-sm": buttonSize === "md",
    "px-3 py-2 text-sm": buttonSize === "lg",
    "px-3.5 py-2.5 text-sm": buttonSize === "xl",
  };

  //TODO add hover colors here
  const styleColorMap = {
    "bg-primary": buttonType === "primary",
    "bg-white border border-grey-500": buttonType === "secondary",
  };

  let cornerStyle =
    buttonStyle === "rounded"
      ? "rounded-full"
      : buttonSize === "xs" || buttonSize === "sm"
        ? "rounded"
        : "rounded-md";

  let textStyleMap = {
    "text-light": textColor === "light",
    "text-dark": textColor === "dark",
    "text-grey-500": textColor === "grey",
  };

  return (
    <button
      type="button"
      className={cn(
        // Default
        "flex gap-2 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        cornerStyle,
        styleSizeMap,
        styleColorMap,
        textStyleMap
      )}
    >
      {iconPosition === "leading" ? <ArrowLongLeftIcon className="h-4 self-center" /> : null}
      {label}
      {icon && iconPosition === "trailing" ? <svg></svg> : null}
    </button>
  );
}
