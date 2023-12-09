import classNames from "classnames";

interface StatsProps {
  children: React.ReactNode;
  size?: "s" | "m" | "l";
  variant?: "border" | "shadow";
}

const Card = ({ children, size = "m", variant = "border" }: StatsProps) => {
  return (
    <div
      className={classNames(
        size === "s" && "p-2 rounded-sm",
        size === "m" && "p-4 rounded-md",
        size === "l" && "p-6 rounded-lg",
        variant === "border" && "border border-gray-200",
        variant === "shadow" && "shadow"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
