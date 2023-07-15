import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-700 text-gray-100">
      <div className="containter grid grid-rows-4 md:grid-rows-none md:grid-cols-4  py-4">
        {/* Logo */}
        <div className="flex justify-center items-center flex-col">
          <img
            src="/images/logo-dark.png"
            alt="logo"
            className="max-w-[300px]"
          />
          {/* Socials */}
          <div className="flex flex-row justify-around w-full max-w-[300px] pt-10">
            <SiFacebook className="scale-125 hover:scale-150 transition-transform duration-500" />
            <SiInstagram className="scale-125 hover:scale-150 transition-transform duration-500" />
            <SiTwitter className="scale-125 hover:scale-150 transition-transform duration-500" />
          </div>
        </div>
        {/* Nav */}
        <div className="flex flex-col text-center">
          <h3 className="py-4 text-lg">Nawigacja</h3>
          <ul>
            <li>tak</li>
            <li>tak</li>
            <li>TAK</li>
            <li>TAK</li>
            <li>Tak</li>
          </ul>
        </div>
        {/* Before travel */}
        <div className="flex flex-col text-center">
          <h3 className="py-4 text-lg">Przed podróżą</h3>
          <ul>
            <li>tak</li>
            <li>nie</li>
            <li>nie</li>
            <li>tak</li>
          </ul>
        </div>
        {/* Privacy + terms */}
        <div className="flex flex-col text-center justify-start items-center py-4">
          <ul>
            <li className="py-2">Regulamin strony</li>
            <li className="py-2">Polityka prywatności</li>
          </ul>
        </div>
      </div>

      {/* Creator */}
      <div className="text-center p-4">
        <small>Created by Filip Sojecki</small>
      </div>
    </footer>
  );
};

export default Footer;
