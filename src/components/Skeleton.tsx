type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      aria-hidden
      role="figure"
      className={
        `animate-pulse bg-gray-200 rounded` + (className ? ` ${className}` : ``)
      }
    />
  );
};
