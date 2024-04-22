import { cn } from "../utils";
import { ReactElement } from "react";

type BUTTON_TYPES = "primary" | "secondary" | "soft";
type BUTTON_STYLES = "square" | "rounded";
type BUTTON_SIZE = "xs" | "sm" | "md" | "lg" | "xl";
type TEXT_COLOR = "white" | "black" | "grey";

type ButtonProps = {
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
   * What color is the text
   */
  textColor: TEXT_COLOR;

  onClick?: () => void;
} & (
  | {
      /**
       * Is there an icon
       */
      icon: ReactElement;
      /**
       * What position is the icon in?
       */
      iconPosition: ICON_POSITION;
      /**
       * Optional click handler
       */
    }
  | { icon?: never; iconPosition?: never }
);

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
}: ButtonProps) {
  const styleSizeMap = {
    "px-2 py-1 text-xs": buttonSize === "xs",
    "px-2 py-1 text-sm": buttonSize === "sm",
    "px-2.5 py-1.5 text-sm": buttonSize === "md",
    "px-3 py-2 text-sm": buttonSize === "lg",
    "px-3.5 py-2.5 text-sm": buttonSize === "xl",
  };

  const styleColorMap = {
    "bg-primary hover:bg-primary/80": buttonType === "primary",
    "bg-white border border-primary hover:bg-primary/5": buttonType === "secondary",
    "bg-primary/10 hover:bg-primary/30": buttonType === "soft",
  };

  let cornerStyle =
    buttonStyle === "rounded"
      ? "rounded-full"
      : buttonSize === "xs" || buttonSize === "sm"
        ? "rounded"
        : "rounded-md";

  let textStyleMap = {
    "text-white": textColor === "white",
    "text-black": textColor === "black",
    "text-secondary-500": textColor === "grey",
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
      onClick={onClick}
    >
      {icon && iconPosition === "leading" ? icon : null}
      {label}
      {icon && iconPosition === "trailing" ? icon : null}
    </button>
  );
}
