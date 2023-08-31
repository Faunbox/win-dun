"use client";
import { stagger, useAnimate, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";

const DesktopLinks = () => {
  const locale = useLocale();

  return (
    <div className="flex flex-row gap-4 mr-4">
      {locale === "pl" &&
        PlNavbar?.map(
          ({ href, title }: { href: string; title: string }, id) => {
            return (
              <motion.li
                key={title}
                initial={{ opacity: 0, scale: 0, translateY: -50 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.4, delay: id * 0.1 }}
              >
                <NavLink href={href} title={title} />
              </motion.li>
            );
          }
        )}
      {locale === "en" &&
        EnNavbar?.map(({ href, title }: { href: string; title: string }) => (
          <li key={title}>
            <NavLink href={href} title={title} />
          </li>
        ))}
      {locale === "nl" &&
        NlNavbar?.map(({ href, title }: { href: string; title: string }) => (
          <li key={title}>
            <NavLink href={href} title={title} />
          </li>
        ))}
    </div>
  );
};

export default DesktopLinks;
