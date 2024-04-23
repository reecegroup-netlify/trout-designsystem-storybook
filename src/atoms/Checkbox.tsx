import { cn } from "@/utils";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { ReactElement, ReactNode } from "react";

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

export function Checkbox({ label, description, inline, isError, errorMessage }: CheckboxProps) {
  const boxId = label.toLowerCase();
  const descriptionId = boxId + "-description";
  const textColorMap = {
    "text-primary-600 focus:ring-primary-600 border-gray-300": !isError,
    "text-status-error-500 bg-status-error-100 border-status-error-500 focus:ring-status-error-500":
      isError,
  };

  return (
    <div className="relative">
      <div className="flex">
        <div className="flex items-center">
          <input
            id={boxId}
            name={boxId}
            aria-describedby={description ? descriptionId : undefined}
            type="checkbox"
            className={cn("h-4 w-4 rounded", textColorMap)}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
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
