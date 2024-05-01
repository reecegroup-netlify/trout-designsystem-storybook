import { cn } from "@/utils";
import { ReactElement } from "react";

type RadioButtonProps = {
  id: string;
  groupName: string;
  defaultChecked?: boolean;
  label: string;
  isDisabled?: boolean;
} & (
  | { description: string; descriptionInline?: boolean }
  | { description?: never; descriptionInline?: never }
);

/**
 * Radio Buttons should always be wrapped in a Radio Group.
 */
export function RadioButton({
  id: buttonId,
  groupName,
  defaultChecked,
  label,
  description,
  descriptionInline = false,
  isDisabled = false,
}: RadioButtonProps) {
  const withDescriptionStyles = description ? "relative items-start" : "items-center";
  const disabledStyles = isDisabled ? "text-gray-300" : "text-primary-600 focus:ring-primary-600";
  const DescriptionElement = descriptionInline ? "span" : "p";
  return (
    <div key={buttonId} className={cn("flex", withDescriptionStyles)}>
      <div className={description ? "flex h-6 items-center" : ""}>
        <input
          id={buttonId}
          name={groupName}
          type="radio"
          defaultChecked={defaultChecked}
          disabled={isDisabled}
          className={cn("h-4 w-4 border-gray-300", disabledStyles)}
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={buttonId} className="font-medium text-gray-900">
          {label}
        </label>{" "}
        {description && (
          <DescriptionElement id={`${buttonId}-description`} className="text-gray-500">
            {description}
          </DescriptionElement>
        )}
      </div>
    </div>
  );
}

type RadioGroupProps = {
  children: ReactElement<RadioButtonProps> | ReactElement<RadioButtonProps>[];
  groupHeading: string;
  groupDescription?: string;
};

export function RadioGroup({ children, groupHeading, groupDescription }: RadioGroupProps) {
  return (
    <div>
      <label className="text-base font-semibold text-gray-900">{groupHeading}</label>
      {groupDescription && <p className="text-sm text-gray-500">{groupDescription}</p>}
      <fieldset className="mt-4">
        <legend className="sr-only">{`${groupHeading} radio buttons`}</legend>
        <div className="space-y-4">{children}</div>
      </fieldset>
    </div>
  );
}
