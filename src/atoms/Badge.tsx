import { cn } from "@/utils";

type SUPPORTED_COLORS = "gray" | "red" | "blue";

type SUPPORTED_STYLES = "square" | "pill";

interface BadgeProps {
  /**
   * Badge contents
   */
  label: string;
  /**
   * What style is it?
   */
  badgeStyle: SUPPORTED_STYLES;
  /**
   * What color should it be?
   */
  color: SUPPORTED_COLORS;
  /**
   * Should it have a border?
   */
  withBorder?: boolean;
  /**
   * Should it have a dot?
   */
  withDot?: boolean;
  /**
   * Should it have a remove button?
   * If so, withBorder is true and withDot is false
   */
  removeButton?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Small interactive or non-interactive displays
 */
export function Badge({
  label,
  color,
  badgeStyle,
  withBorder = false,
  withDot = false,
  removeButton = false,
  onClick,
  ...props
}: BadgeProps) {
  if (removeButton) {
    withBorder = true;
    withDot = false;
  }

  // with either dot or border or neither but not both
  const shouldBeColored =
    (withDot && !withBorder) || (withBorder && !withDot) || (!withBorder && !withDot);

  return (
    <span
      className={cn(
        "inline-flex cursor-pointer select-none items-center gap-x-1.5 rounded-md px-2 py-1",
        { "rounded-md": badgeStyle === "square", "rounded-full": badgeStyle === "pill" },
        // Add border to flat style if there is a dot
        { "ring-1 ring-inset": withBorder || (!withBorder && withDot) },

        shouldBeColored
          ? {
              "bg-gray-50 text-gray-600 ring-gray-500/10": color === "gray",
              "bg-red-50 text-red-700 ring-red-600/10": color === "red",
              "bg-blue-50 text-blue-700 ring-blue-700/10": color === "blue",
            }
          : ""
      )}
      onClick={onClick}
      {...props}
    >
      {withDot && (
        <svg
          className={cn("h-1.5 w-1.5", {
            "fill-red-500": color === "red",
            "fill-blue-500": color === "blue",
          })}
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
      )}

      {label}

      {removeButton && <RemoveButton color={color} />}
    </span>
  );
}

const RemoveButton = ({ color }: { color: SUPPORTED_COLORS }) => {
  const buttonColorMap = {
    "hover:bg-gray-500/20": color === "gray",
    "hover:bg-red-600/20": color === "red",
    "hover:bg-blue-600/20": color === "blue",
  };

  const checkboxColorMap = {
    "stroke-gray-600/50 group-hover:stroke-gray-600/75": color === "gray",
    "stroke-red-600/50 group-hover:stroke-red-600/75": color === "red",
    "stroke-blue-700/50 group-hover:stroke-blue-700/75": color === "blue",
  };

  return (
    <button
      type="button"
      className={cn("group relative -mr-1 h-3.5 w-3.5 rounded-sm", buttonColorMap)}
    >
      <span className="sr-only">Remove</span>
      <svg viewBox="0 0 14 14" className={cn("h-3.5 w-3.5", checkboxColorMap)}>
        <path d="M4 4l6 6m0-6l-6 6" />
      </svg>
      <span className="absolute -inset-1" />
    </button>
  );
};
