import { ReactNode } from "react";

const SectionHeader = ({
  children,
  size = "2xl",
  margin = "mb-5",
}: {
  children: ReactNode;
  size?: string;
  margin?: string;
}) => {
  return (
    <h2
      className={`text-${size} font-normal ${margin} border-b-1 border-inherit self-center uppercase mix-blend-difference text-white`}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
