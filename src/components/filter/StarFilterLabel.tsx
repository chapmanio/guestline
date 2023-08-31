import { StarIcon } from "../icons";

type StarFilterLabelProps = {
  count: number;
};

export const StarFilterLabel = ({ count }: StarFilterLabelProps) => {
  return (
    <div className="flex justify-center items-center space-x-1">
      <div className="flex justify-center items-center">
        {[...Array(count)].map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>

      <p className="text-sm font-medium text-gray-900">and over</p>
    </div>
  );
};
