import { ReactNode } from "react";

const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-red-700 text-white p-3 -z-10 hover:scale-110 transition-transform duration-500">
      {children}
    </button>
  );
};

export default NavButton;
