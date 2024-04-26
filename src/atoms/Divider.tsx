import { cn } from "@/utils";

type DividerProps = {
  /**
   * Divider text
   */
  labelText?: string;
  /**
   * Large or small text
   */
  labelType: "label" | "title";
  labelLocation: "left" | "center" | "right";
};

export default function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t bg-black" />
      </div>
    </div>
  );
}

export function LabelDivider({ labelText, labelType, labelLocation }: DividerProps) {
  const labelLocationStyle = {
    "justify-start": labelLocation === "left",
    "justify-center": labelLocation === "center",
    "justify-end": labelLocation === "right",
  };

  const textWeightStyle = {
    "text-sm text-gray-500": labelType === "label",
    "text-base font-semibold text-gray-900": labelType === "label",
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t bg-black" />
      </div>
      <div className={cn("relative flex", labelLocationStyle)}>
        <span className={cn("bg-white px-2", textWeightStyle)}>{labelText}</span>
      </div>
    </div>
  );
}

<LabelDivider labelText="label" labelType="label" labelLocation="left" />;
