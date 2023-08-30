import { ReactNode } from "react";

const WhyHeaders = ({
  children,
  margin = "m0",
  weight = "semibold"
}: {
  children: ReactNode;
  margin?: string;
  weight?: string;
}) => {
  return (
    <h2
      className={`text-md font-${weight} ${margin} self-center uppercase text-black`}
    >
      {children}
    </h2>
  );
};

export default WhyHeaders;
