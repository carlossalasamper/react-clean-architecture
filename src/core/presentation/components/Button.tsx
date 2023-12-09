import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import Loading from "./Loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: "primary" | "secondary" | "cancel" | "danger";
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  styleType = "primary",
  size = "m",
  loading,
  fullWidth,
  children,
  className,
  ...props
}: ButtonProps) => {
  const disabled = props.disabled || loading;

  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames(
        "items-center justify-center flex flex-row text-lg font-semibold gap-2",
        size === "s" && "px-3 py-2 rounded-md",
        size === "m" && "px-4 py-3 rounded-lg",
        size === "l" && "px-5 py-4 rounded-xl",
        styleType === "primary" && "bg-primary text-white",
        styleType === "primary" && !disabled && "hover:bg-primary/80",
        styleType === "secondary" && !disabled && "hover:bg-gray-700",
        styleType === "secondary" && "text-primary border border-gray-500",
        styleType === "cancel" && "bg-gray-300 text-gray-600 hover:bg-gray-400",
        styleType === "danger" && "text-red-600 border border-red-600",
        styleType === "danger" &&
          !disabled &&
          "hover:font-bold hover:ring hover:ring-red-700",
        disabled && "opacity-50",
        fullWidth && "w-full",
        className
      )}
    >
      {loading && <Loading />}
      {children}
    </button>
  );
};

export default Button;
