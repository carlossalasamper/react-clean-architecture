import { SelectHTMLAttributes, forwardRef, useState } from "react";
import classNames from "classnames";
import { MdErrorOutline, MdExpandMore } from "react-icons/md";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  error?: string;
  label?: string;
  hideErrorMessage?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, error, hideErrorMessage, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={className}>
        {label && <label className="block mb-2">{label}</label>}

        <div
          className={classNames(
            "relative flex items-center gap-2 w-full rounded-md transition-all duration-150 ring",
            isFocused ? "ring-blue-300" : "ring-gray-200"
          )}
        >
          <select
            ref={ref}
            {...props}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            className={classNames(
              "w-full px-4 py-3 rounded-md outline-none appearance-none",
              props.disabled && "bg-gray-100 text-gray-500",
              error && "border-l-8 border-l-red-500"
            )}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <MdExpandMore className="pointer-events-none text-xl text-gray-500 absolute right-4" />
        </div>

        <div
          className={classNames(
            "mt-1 flex flex-row items-center",
            (hideErrorMessage || !error) && "opacity-0"
          )}
        >
          <MdErrorOutline className="text-red-500 mr-1.5" size={16} />
          <span className="text-red-500 text-sm h-5">{error}</span>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
