"use client";
import { useState, useContext, createContext } from "react";

const NavbarContext = createContext();

export function useNavbar() {
  return useContext(NavbarContext);
}

export function NavbarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [flags, setFlags] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const value = { open, setOpen, flags, setFlags, mobileOpen, setMobileOpen, mobileDropdownOpen, setMobileDropdownOpen };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
}
