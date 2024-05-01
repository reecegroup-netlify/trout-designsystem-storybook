import { cn } from "@/utils";
import { ReactNode } from "react";

export function MediaObject({
  media,
  mediaLocation = "top",
  mediaSide = "left",
  headingContent,
  textContent,
}: {
  /**
   * Media object (image, svg)
   */
  media: ReactNode;
  /**
   * How is it aligned to text
   */
  mediaLocation?: "top" | "center" | "bottom";
  /**
   * What side of the text is it on
   */
  mediaSide?: "left" | "right";
  headingContent: string;
  textContent: string;
}) {
  const location = {
    "": mediaLocation === "top",
    "self-center": mediaLocation === "center",
    "self-end": mediaLocation === "bottom",
  };

  const alignment = mediaSide === "left" ? "order-first" : "order-last";

  return (
    <div className="flex gap-4">
      <div className={cn("flex-shrink-0", location, alignment)}>{media}</div>
      <div>
        <h4 className="text-lg font-bold">{headingContent}</h4>
        <p className="mt-1">{textContent}</p>
      </div>
    </div>
  );
}
