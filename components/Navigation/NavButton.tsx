import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button radius="none" color="primary" className=" text-black p-4">
      {children}
    </Button>
  );
};

export default NavButton;
