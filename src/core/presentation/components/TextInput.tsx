import classNames from "classnames";
import { InputHTMLAttributes, forwardRef, useState } from "react";
import { MdErrorOutline } from "react-icons/md";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hideErrorMessage?: boolean;
  PrependIconComponent?: React.ComponentType<{ className?: string }>;
  AppendIconComponent?: React.ComponentType<{ className?: string }>;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      hideErrorMessage,
      error,
      PrependIconComponent,
      AppendIconComponent,
      label,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={props.className}>
        {label && <label className="block mb-2">{label}</label>}

        <div
          className={classNames(
            "bg-white px-4 flex items-center gap-2 w-full rounded-md transition-all duration-150 ring",
            isFocused ? "ring-blue-300" : "ring-gray-200",
            props.disabled && "bg-gray-100",
            error && "border-l-8 border-l-red-500"
          )}
        >
          {PrependIconComponent && (
            <PrependIconComponent className="text-xl text-gray-400" />
          )}
          <input
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
              "bg-transparent py-3 w-full block rounded-md outline-none",
              props.disabled && "text-gray-500"
            )}
          />

          {AppendIconComponent && (
            <AppendIconComponent className="text-xl text-gray-400" />
          )}
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

TextInput.displayName = "TextInput";

export default TextInput;
