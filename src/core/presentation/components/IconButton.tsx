import classNames from "classnames";
import { MouseEvent } from "react";
import { IconType } from "react-icons/lib";

interface IconButtonProps {
  styleType?: "primary" | "secondary" | "transparent";
  size?: "s" | "m" | "l";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  IconComponent: IconType;
}

const IconButton = ({
  styleType = "primary",
  size = "m",
  className,
  onClick,
  disabled,
  IconComponent,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex items-center justify-center rounded-full",
        size === "s" && "p-1",
        size === "m" && "p-2",
        size === "l" && "p-3",
        styleType === "primary" && "bg-primary text-white",
        styleType === "primary" && !disabled && "hover:bg-primary/80",
        styleType === "secondary" && !disabled && "hover:bg-gray-700",
        styleType === "secondary" && "text-primary border border-gray-500",
        styleType === "transparent" && "bg-transparent text-gray-600",
        disabled && "opacity-50",
        className
      )}
    >
      <IconComponent />
    </button>
  );
};

export default IconButton;
