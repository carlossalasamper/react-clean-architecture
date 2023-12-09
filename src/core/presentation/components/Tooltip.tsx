import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, ReactNode, useCallback, useRef } from "react";

interface TooltipProps {
  renderTrigger: () => ReactNode;
  renderContent: () => ReactNode;
}

const Tooltip = ({ renderTrigger, renderContent }: TooltipProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const handleEnter = (open: boolean) => {
    !open && triggerRef.current?.click();
  };
  const handleLeave = useCallback((open: boolean) => {
    open && triggerRef.current?.click();
  }, []);

  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <Popover.Button
            ref={triggerRef}
            className={classNames(
              open && "text-opacity-90",
              "group focus:outline-none"
            )}
          >
            {renderTrigger()}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10">
              <div className="text-sm w-fit bg-black bg-opacity-80 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 relative grid px-4 py-2">
                {renderContent()}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default Tooltip;
