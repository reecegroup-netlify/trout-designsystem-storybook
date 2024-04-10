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
  onClick,
  ...props
}: BadgeProps) {
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
    </span>
  );
}
