import { ReactNode } from "react";

const WhyHeaders = ({
  children,
  margin = "m0",
}: {
  children: ReactNode;
  margin?: string;
}) => {
  return (
    <h2
      className={`text-md font-semibold ${margin} self-center uppercase text-black`}
    >
      {children}
    </h2>
  );
};

export default WhyHeaders;
