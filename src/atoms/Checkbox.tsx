import { cn } from "@/utils";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

type CheckboxProps = {
  /**
   * "Heading" that labels the box
   */
  label: string;
  /**
   * Description below
   */
  description?: string;
  /**
   * Should description be inline?
   */
  inline: boolean;
  /**
   * Is the checkbox left or right-aligned
   */
  checkboxPosition: "left" | "right";
} & (
  | {
      /**
       * Is there an error?
       */
      isError?: boolean;
      /**
       * What is the error message?
       */
      errorMessage: string;
    }
  | { isError?: never; errorMessage?: never }
);

export function Checkbox({
  label,
  description,
  inline,
  isError,
  errorMessage,
  checkboxPosition,
}: CheckboxProps) {
  const boxId = label.toLowerCase();
  const descriptionId = boxId + "-description";
  const textColorMap = {
    "text-primary-600 focus:ring-primary-600 border-gray-300": !isError,
    "text-status-error-500 bg-status-error-100 border-status-error-500 focus:ring-status-error-500":
      isError,
  };

  return (
    <div className="space-y-5">
      <div className="relative flex flex-col items-start">
        <div className="flex gap-3">
          <div
            className={cn("flex h-6 items-center", {
              "order-first": checkboxPosition === "left",
              "order-last": checkboxPosition === "right",
            })}
          >
            <input
              id={boxId}
              name={boxId}
              aria-describedby={description ? descriptionId : undefined}
              type="checkbox"
              className={cn("h-4 w-4 rounded", textColorMap)}
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor={boxId} className="font-medium text-gray-900">
              {label}
            </label>
            {description && (
              <ParaOrSpan id={descriptionId} inline={inline}>
                {description}
              </ParaOrSpan>
            )}
          </div>
        </div>
        {isError && (
          <div className="mt-1 flex">
            <ExclamationCircleIcon height={16} className="text-status-error-500 self-center" />
            <p className="text-status-error-500 ml-3 text-sm">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const ParaOrSpan = ({
  inline,
  id,
  children,
}: {
  inline: boolean;
  id: string;
  children: ReactNode | ReactNode[];
}) => {
  if (inline) {
    return (
      <span id={id} className="text-gray-500">
        {" "}
        {children}
      </span>
    );
  } else {
    return (
      <p id={id} className="text-gray-500">
        {children}
      </p>
    );
  }
};
