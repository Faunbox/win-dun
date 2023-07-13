import { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-3xl font-bold mb-10">{children}</h2>;
};

export default SectionHeader;
