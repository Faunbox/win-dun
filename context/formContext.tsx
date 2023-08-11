"use client";
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface InputType {
  name: string;
  surname: string;
  city: string;
  street: string;
  country: string;
  numer?: number;
  weight?: number;
  date: Date | number;
  phone: number;
  email: string;
  message?: string;
  nameToGo?: string;
  surnameToGo?: string;
  countryToGo: string;
  cityToGo: string;
  streetToGo: string;
}

export type StateContextType = {
  peopleForm: InputType;
  setPeopleForm: Dispatch<SetStateAction<InputType>>;
};

const FormContext = createContext<null | StateContextType>(null);

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState("people");
  const [peopleForm, setPeopleForm] = useState<InputType>({
    name: "",
    surname: "",
    email: "",
    city: "",
    street: "",
    country: "",
    numer: 0,
    weight: 1,
    date: new Date(),
    phone: 1,
    message: "",
    countryToGo: "",
    cityToGo: "",
    streetToGo: "",
  });
  const [parcelForm, setParcelForm] = useState({});
  const [bigForm, setBigForm] = useState({});

  const value = {
    peopleForm,
    setPeopleForm,
    parcelForm,
    setParcelForm,
    bigForm,
    setBigForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
