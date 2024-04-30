import { cn } from "@/utils";

type TextDividerProps = {
  variant: "text";
  labelText: string;
  labelType: "label" | "title";
  labelLocation: "left" | "center" | "right";
};

type IconDividerProps = {
  variant: "icon";
  icon: JSX.Element;
  labelLocation: "left" | "center" | "right";
};

type NoneDividerProps = {
  variant: "none";
};

type DividerProps = TextDividerProps | IconDividerProps | NoneDividerProps;

export function Divider(props: DividerProps) {
  const { variant } = props;

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t bg-black" />
      </div>
      {variant !== "none" && (
        <div
          className={cn("relative flex", {
            "justify-start": props.labelLocation === "left",
            "justify-center": props.labelLocation === "center",
            "justify-end": props.labelLocation === "right",
          })}
        >
          {variant === "text" && (
            <span
              className={cn("bg-white px-2", {
                "text-sm text-gray-300": props.labelType === "label",
                "text-base font-semibold text-gray-900": props.labelType === "label",
              })}
            >
              {props.labelText}
            </span>
          )}
          {variant === "icon" && <span className="bg-white px-2">{props.icon}</span>}
        </div>
      )}
    </div>
  );
}
