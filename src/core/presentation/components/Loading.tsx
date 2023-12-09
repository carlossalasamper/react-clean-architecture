import classNames from "classnames";
import { CgSpinnerTwoAlt } from "react-icons/cg";

interface LoadingProps {
  size?: number;
  className?: string;
}

const Loading = ({ className, size = 24 }: LoadingProps) => {
  return (
    <CgSpinnerTwoAlt
      className={classNames("animate-spin", className)}
      size={size}
    />
  );
};

export default Loading;
