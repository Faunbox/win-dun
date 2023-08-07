"use client";
import Link from "next/link";
import SectionHeader from "../Typography/SectionHeader";
import { useState } from "react";
import axios from "axios";

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
                <label>Imię</label>
                <input
                  type="text"
                  placeholder="Jan Kowalski"
                  required
                  name="name"
                  className="border-0 border-b-2 bg-transparent shadow-sm w-full"
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full md:w-[50%]">
                <label>Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="on"
                  placeholder="jan.kowalski@poczta.pl"
                  onChange={handleOnChange}
                  className="border-0 border-b-2 bg-transparent shadow-sm w-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full ">
              <label htmlFor="message">Wiadomość</label>
              <textarea
                name="message"
                id="message"
                placeholder="Treść wiadomości"
                onChange={handleOnChange}
                className="border-0 border-b-2 bg-transparent shadow-sm w-full focus:border-red-800"
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
                danych w celu nawiązania kontaktu, odpowiedzi na zadane pytania
                i przesłanie oferty środkami komunikacji elektronicznej (zgoda
                konieczna dla odpowiedzi na zadane pytania i wysłania żądanej
                oferty)
              </label>
            </div>
            <button
              type="submit"
              disabled={!isCheckd}
              className="disabled:bg-green-200 bg-green-600 mx-auto text-white disabled:text-black p-4 hover:scale-110 transition-transform duration-500"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
