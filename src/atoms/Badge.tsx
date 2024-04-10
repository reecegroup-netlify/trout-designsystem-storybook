import { cn } from "@/utils";

type SUPPORTED_COLORS = "red" | "blue";

interface BadgeProps {
  // Badge contents
  label: string;
  // What color should it be
  color: SUPPORTED_COLORS;
  // Should it have a border?
  withBorder: boolean;
}

export function Badge({ label, color = "red", withBorder, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1",
        withBorder && "ring-1 ring-inset",
        {
          "bg-red-50 text-red-700 ring-red-600/10": color === "red",
          "bg-blue-50 text-blue-700 ring-blue-700/10": color === "blue",
        }
      )}
    >
      {label}
    </span>
  );
}
