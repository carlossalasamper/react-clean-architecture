import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface TabsProps {
  tabs: {
    key: string;
    label: string;
    IconComponent: IconType;
    render: () => ReactNode;
    disabled?: boolean;
  }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-center flex-wrap">
        {tabs.map((tab) => (
          <Tab key={tab.key} as={Fragment}>
            {({ selected }) => (
              <button
                className={classNames(
                  "outline-none px-3 py-1.5 border-b",
                  selected && "border-primary text-primary",
                  tab.disabled && "text-gray-400 cursor-not-allowed"
                )}
              >
                <div className="flex items-center gap-1.5">
                  <tab.IconComponent />

                  {tab.label}
                </div>
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels className="pt-4">
        {tabs.map((tab) => (
          <Tab.Panel key={tab.key}>{tab.render()}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
