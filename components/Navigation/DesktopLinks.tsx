"use client";
import { stagger, useAnimate, motion, MotionProps } from "framer-motion";
import { useLocale } from "next-intl";
import { EnNavbar, NlNavbar, PlNavbar } from "./data";
import NavLink from "./NavLink";

const DesktopLinks = ({ variants }: { variants?: MotionProps }) => {
  const locale = useLocale();

  return (
    <div className="flex flex-row gap-4 mr-4">
      {locale === "pl" &&
        PlNavbar?.map(
          ({ href, title }: { href: string; title: string }, id) => {
            return (
              //@ts-expect-error
              <motion.li key={title} variants={variants}>
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
