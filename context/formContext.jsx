"use client";
import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export function useForm() {
  return useContext(NavbarContext);
}

export function FormProvider({ children }) {
  const [form, setForm] = useState("people");

  const value = { form, setForm };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
