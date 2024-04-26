import { ReactElement } from "react";
import { Avatar } from "./Avatar";

type AvatarStackProps = {
  stackStyle: "bottom" | "top";
  children: ReactElement<typeof Avatar>[];
};

export const AvatarStack = ({ stackStyle, children }: AvatarStackProps) => {
  return (
    <div className="isolate flex -space-x-2 overflow-hidden">
      {children.map((avatar, index, avatarList) => {
        const zHeight = stackStyle === "bottom" ? 0 : (avatarList.length - index) * 10;

        return <div style={{ zIndex: zHeight }}>{avatar}</div>;
      })}
    </div>
  );
};
