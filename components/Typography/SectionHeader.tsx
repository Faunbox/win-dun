import { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-2xl font-bold mb-5 border-b-1 border-black self-center ">
      {children}
    </h2>
  );
};

export default SectionHeader;
