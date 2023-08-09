"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiMailSendLine } from "react-icons/ri";

interface Input {
  name: string;
  email: string;
  message: string;
}

interface Variants {
  full: string;
  quater: string;
}

const ContactForm = ({ width }: { width: string }) => {
  const [isCheckd, setIsCheckd] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => console.log(width), []);

  const widthVariants: Variants = {
    quater: "md:w-8/12",
    full: "md:w-full",
  };

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email, message }: Input = inputInfo;
    await axios({
      method: "post",
      url: "/api/contact",
      data: { name, email, message },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((msg) => alert(msg.data.message))
      .catch((error) => alert(error));
  };
  return (
    <div
      className={`flex flex-col w-full ${
        widthVariants[width as keyof typeof widthVariants]
      } p-4`}
    >
      <h2 className="m-4 font-bold text-2xl border-b-1 self-center border-black uppercase">
        Formularz kontaktowy
      </h2>
      <form className="flex flex-col px-4 gap-4" onSubmit={handleSubmit}>
        <div className="md:flex md:flex-row md:gap-4">
          <div className="flex flex-col justify-center items-center w-full md:w-[50%]">
            <Input
              type="text"
              name="name"
              id="name"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Jan Kowalski"
              radius="none"
              label="Imię i nazwisko"
              isRequired={true}
              autoComplete="on"
              onChange={handleOnChange}
              className=""
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-[50%]">
            <Input
              type="email"
              name="email"
              id="email"
              variant="bordered"
              labelPlacement="outside"
              radius="none"
              placeholder="jan.kowalski@email.com"
              label="Adres email"
              isRequired={true}
              autoComplete="on"
              onChange={handleOnChange}
              className="border-red-500"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center  w-full ">
          <Textarea
            isRequired={true}
            type="text"
            variant="bordered"
            radius="none"
            labelPlacement="outside"
            label={"Treść wiadomości"}
            placeholder="Treść wiadomości"
            className="w-full"
            name="message"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={() => setIsCheckd(!isCheckd)}
          />
          <label htmlFor="checkbox">
            Wyrażam zgodę na przetwarzanie podanych w formularzu kontaktowym
            danych w celu nawiązania kontaktu.
          </label>
        </div>
        <Button
          type="submit"
          isDisabled={!isCheckd}
          color="secondary"
          radius="none"
          className="mx-auto w-full max-w-[300px] text-white disabled:text-black p-4 hover:scale-110 transition-transform duration-500"
        >
          <RiMailSendLine size={20} />
          Wyślij wiadomość
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
