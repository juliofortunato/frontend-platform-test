import { LoaderCircleIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <LoaderCircleIcon className="animate-spin" size={64} />
    </div>
  );
};

export default Loading;
