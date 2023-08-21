import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button
      radius="none"
      variant="bordered"
      color="primary"
      className=" text-black p-4 border-white"
    >
      {children}
    </Button>
  );
};

export default NavButton;
