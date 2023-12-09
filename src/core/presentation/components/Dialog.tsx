import { Dialog as HeadlessUIDialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import BaseDialogProps from "../types/BaseDialogProps";

interface DialogProps extends BaseDialogProps {
  children: ReactNode;
}

const Dialog = (props: DialogProps) => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <HeadlessUIDialog
        as="div"
        className="relative z-50"
        onClose={props.onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessUIDialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-600 p-6 text-left align-middle shadow-xl transition-all">
                {props.title && (
                  <HeadlessUIDialog.Title
                    as="h3"
                    className="text-center text-xl font-semibold leading-6 text-gray-200 border-b pb-3"
                  >
                    {props.title}
                  </HeadlessUIDialog.Title>
                )}
                <div className="mt-6">{props.children}</div>
              </HeadlessUIDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessUIDialog>
    </Transition>
  );
};

export default Dialog;
