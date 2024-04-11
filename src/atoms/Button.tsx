import { cn } from "@/utils";
import { ReactElement } from "react";

type BUTTON_TYPES = "primary" | "secondary" | "soft";
type BUTTON_STYLES = "square" | "rounded";
type BUTTON_SIZE = "xs" | "sm" | "md" | "lg" | "xl";
type TEXT_COLOR = "light" | "dark";

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

  const styleColorMap = {
    "bg-primary": buttonType === "primary",
  };

  let cornerStyle =
    buttonStyle === "rounded"
      ? "rounded-full"
      : buttonSize === "xs" || buttonSize === "sm"
        ? "rounded"
        : "rounded-md";

  let textStyle = {
    "text-light": textColor === "light",
    "text-dark": textColor === "dark",
  };

  return (
    <button
      type="button"
      className={cn(
        // Default
        "font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        cornerStyle,
        styleSizeMap,
        styleColorMap,
        textStyle
      )}
    >
      {icon && iconPosition === "leading" ? <svg></svg> : null}
      {label}
      {icon && iconPosition === "trailing" ? <svg></svg> : null}
    </button>
  );
}

<Button
  label="Button text"
  buttonType="primary"
  buttonSize="md"
  buttonStyle="rounded"
  textColor="dark"
/>;
