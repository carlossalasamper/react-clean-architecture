import { MdSearchOff } from "react-icons/md";

interface EmptyListProps {
  message: string;
}

const EmptyList = ({ message }: EmptyListProps) => {
  return (
    <div className="flex flex-col items-center">
      <MdSearchOff className="text-gray-300" size={150} />
      <span className="text-sm text-gray-400">{message}</span>
    </div>
  );
};

export default EmptyList;
