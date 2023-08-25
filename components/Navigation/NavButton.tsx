import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      radius="none"
      color="primary"
      className=" text-black border-white bg-transparent"
    >
      {children}
    </Button>
  );
};

export default NavButton;
