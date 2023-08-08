"use client";
import Link from "next/link";
import SectionHeader from "../Typography/SectionHeader";
import { useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";

interface Input {
  name: string;
  email: string;
  message: string;
}

const Order = () => {
  const [isCheckd, setIsCheckd] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <section className="bg-gray-100 section-container p-6 flex-col">
      <SectionHeader>Kontakt</SectionHeader>
      <div className="container w-full flex flex-col md:flex-row gap-4 md:justify-around px-4 divide-y-2 md:divide-x-2 md:divide-y-0 divide-red-800">
        <div className="flex flex-col w-full md:max-w-[50%] justify-center items-center text-center gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            vero sed minima quam earum dolorum magni commodi aperiam architecto
            sequi.
          </p>
          <div className="flex flex-col gap-2">
            <p>Telefon</p>
            <p>Email</p>
            <p>Cośtam</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:max-w-[50%] py-4">
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
                  label="Imię i nazwisko"
                  radius="none"
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
                  radius="none"

                  labelPlacement="outside"
                  placeholder="jan.kowalski@email.com"
                  label="Adres email"
                  isRequired={true}
                  autoComplete="on"
                  onChange={handleOnChange}
                  className="border-red-500"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full ">
              <Textarea
                isRequired={true}
                type="text"
                variant="bordered"
                radius="none"

                label={"Treść wiadomości"}
                labelPlacement="outside"
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
              className="mx-auto text-white disabled:text-black p-4 hover:scale-110 transition-transform duration-500"
            >
              Wyślij
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
