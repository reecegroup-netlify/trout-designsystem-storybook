import { cn } from "@/utils";
import { ReactElement } from "react";

type POSSIBLE_SIZES = "xs" | "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  /**
   * How big is the avatar?
   */
  size: POSSIBLE_SIZES;
  /**
   * Rounded or circular?
   */
  cornerStyle: "rounded" | "circular";
  /**
   * What are the user's initials as a fallback?
   */
  userInitials: string;
  /**
   * What is their avatar image?
   */
  avatarImage?: string;
  children?: ReactElement<typeof AvatarNotification>;
};

export function Avatar({ size, cornerStyle, avatarImage, userInitials, children }: AvatarProps) {
  const sizeMap = {
    "h-6 w-6 text-xs": size === "xs",
    "h-8 w-8 text-sm": size === "sm",
    "h-10 w-10": size === "md",
    "h-12 w-12 text-lg": size === "lg",
    "h-14 w-14 text-xl": size === "xl",
  };

  const cornerType = cornerStyle === "circular" ? "rounded-full" : "rounded-md";

  const styleMaps = [sizeMap, cornerType];

  //   update styles
  if (!avatarImage) {
    return (
      <span className="relative inline-block">
        <span className={cn("inline-flex items-center justify-center bg-gray-500", styleMaps)}>
          <span className="font-medium leading-none text-white">{userInitials}</span>
        </span>
        {children && children}
      </span>
    );
  }
  return (
    <span className="relative inline-block">
      <img className={cn("object-cover", styleMaps)} src={avatarImage} alt="Avatar image" />
      {children && children}
    </span>
  );
}

type AvatarNotificationProps = {
  size: POSSIBLE_SIZES;
  status: "positive" | "negative" | "neutral";
  location: "top" | "bottom";
  cornerStyle: "rounded" | "circular";
};

export const AvatarNotification = ({
  size,
  status,
  location,
  cornerStyle,
}: AvatarNotificationProps) => {
  const notificationSizeMap = {
    "h-1.5 w-1.5": size === "xs",
    "h-2 w-2": size === "sm",
    "h-2.5 w-2.5": size === "md",
    "h-3 w-3": size === "lg",
    "h-3.5 w-3.5": size === "xl",
  };

  const statusMap = {
    "bg-status-success-500": status === "positive",
    "bg-status-error-500": status === "negative",
    "bg-gray-400": status === "neutral",
  };

  // Rounded corners need an offset, circular don't
  const heightOffset =
    cornerStyle === "rounded"
      ? location === "top"
        ? "-translate-y-1/2 translate-x-1/2 transform"
        : "translate-y-1/2 translate-x-1/2 transform"
      : null;
  const notifLocation = location === "top" ? "top-0" : "bottom-0";

  return (
    <span
      className={cn(
        "absolute right-0 block rounded-full ring-2 ring-white",
        notifLocation,
        heightOffset
      )}
    >
      <span className={cn("block rounded-full", notificationSizeMap, statusMap)} />
    </span>
  );
};
