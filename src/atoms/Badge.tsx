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
              "bg-secondary-100 text-secondary-600 ring-secondary-500/10": color === "gray",
              "bg-status-error-100 text-status-error-500 ring-status-error-500/10": color === "red",
              "bg-status-info-100 text-status-info-500 ring-status-info-700/10": color === "blue",
            }
          : ""
      )}
      onClick={onClick}
      {...props}
    >
      {withDot && (
        <svg
          className={cn("h-1.5 w-1.5", {
            "fill-status-error-500": color === "red",
            "fill-status-info-500": color === "blue",
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
    "hover:bg-secondary-500/20": color === "gray",
    "hover:bg-status-error-500/20": color === "red",
    "hover:bg-status-info-500/20": color === "blue",
  };

  const checkboxColorMap = {
    "stroke-secondary-600/50 group-hover:stroke-secondary-600/75": color === "gray",
    "stroke-status-error-500/50 group-hover:stroke-status-error-500/75": color === "red",
    "stroke-status-info-500/50 group-hover:stroke-status-info-500/75": color === "blue",
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
