import classNames from "classnames";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import "jsoneditor-react/es/editor.min.css";
import { MdErrorOutline } from "react-icons/md";
import { forwardRef } from "react";

interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  hideErrorMessage?: boolean;
  error?: string;
  label?: string;
  className?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ value, onChange, hideErrorMessage, error, label, className }, _ref) => {
    return (
      <div className={className}>
        {label && <label className="block mb-2">{label}</label>}

        <HeadlessSwitch
          checked={value}
          onChange={onChange}
          className={`${value ? "bg-green-400" : "bg-gray-200"}
          relative inline-flex h-10 w-20 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
          <span
            aria-hidden="true"
            className={`${value ? "translate-x-10" : "translate-x-0"}
            pointer-events-none inline-block h-9 w-9 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </HeadlessSwitch>

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

Switch.displayName = "Switch";

export default Switch;
