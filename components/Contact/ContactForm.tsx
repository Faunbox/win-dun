"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("contact");

  const [isCheckd, setIsCheckd] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        {t("formHeader")}
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
              placeholder={t("formInputs.placeholder1")}
              radius="none"
              label={t("formInputs.label1")}
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
              placeholder={t("formInputs.placeholder2")}
              label={t("formInputs.label2")}
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
            label={t("formInputs.label3")}
            placeholder={t("formInputs.placeholder3")}
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
          <label htmlFor="checkbox">{t("rodo")}</label>
        </div>
        <Button
          type="submit"
          isDisabled={!isCheckd}
          color="success"
          radius="none"
          className="mx-auto w-full max-w-[300px] text-white disabled:text-black p-4 hover:scale-110 transition-transform duration-500"
        >
          <RiMailSendLine size={20} />
          {t("formButton")}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
