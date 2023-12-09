import { ReactNode } from "react";

export default interface SidebarItemViewModel {
  key: string;
  label: string;
  icon: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
}
