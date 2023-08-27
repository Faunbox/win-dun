import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <header className="fixed container top-0 right-0 left-0 p-1 mx-auto min-w-[100vw] lg:justify-center lg:flex lg:items-center backdrop-blur-sm bg-gray-700 bg-opacity-40 z-50">
      {/* Desktop navbar */}
      <DesktopNav />

      {/* Mobile navbar */}
      <MobileNav />
    </header>
  );
};

export default Nav;
