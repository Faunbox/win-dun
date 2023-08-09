"use client";
import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [form, setForm] = useState("people");
  const [peopleForm, setPeopleForm] = useState({});
  const [parcelForm, setParcelForm] = useState({});

  const value = {
    form,
    setForm,
    peopleForm,
    setPeopleForm,
    parcelForm,
    setParcelForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
