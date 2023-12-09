import classNames from "classnames";

interface SeparatorProps {
  className?: string;
  inverse?: boolean;
}
const Separator = ({ className, inverse = false }: SeparatorProps) => {
  return (
    <div
      className={classNames(
        "my-4 border-t border-gray-200 w-full",
        className,
        inverse && "border-gray-700"
      )}
    />
  );
};

export default Separator;
