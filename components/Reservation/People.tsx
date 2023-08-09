"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import Calendar from "../lib/Datepicker";

const PeopleForm = () => {
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

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-4 w-full ">
          <section className="flex flex-col gap-2 md:gap-4">
            <h3 className="font-light text-lg">Twoje dane</h3>
            <div className="flex flex-row gap-2 md:gap-4">
              <Input
                type="text"
                name="name"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Jan"
                radius="none"
                label="Imię"
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <Input
                type="text"
                name="surname"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Kowalski"
                radius="none"
                label="Nazwisko"
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <Input
                type="text"
                name="city"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Katowice"
                radius="none"
                label="Miejscowość"
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <Input
                type="text"
                name="street"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Losowa 52"
                radius="none"
                label="Ulica"
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <Input
                type="text"
                name="country"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Polska"
                radius="none"
                label="Kraj"
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <Input
                type="number"
                name="country"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                placeholder="1"
                radius="none"
                label="Ilość osób"
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
            </div>
            <div className="flex flex-row gap-2 md:gap-4 justify-around mt-5">
              <Calendar label={"label"} placeholder={"placeholder"} />
              <div className="flex flex-col gap-2 md:gap-4 justify-center items-start">
                <div className="flex flex-row gap-2 md:gap-4">
                  <Input
                    type="number"
                    name="country"
                    id="name"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="543 210 987"
                    radius="none"
                    label="Numer telefonu"
                    isRequired={true}
                    autoComplete="on"
                    onChange={handleOnChange}
                    className=""
                  />
                  <Input
                    type="email"
                    name="country"
                    id="name"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="jan.kowalski@gmail.com"
                    radius="none"
                    label="Adres email"
                    isRequired={true}
                    autoComplete="on"
                    onChange={handleOnChange}
                    className=""
                  />
                </div>
                <Textarea
                  type="text"
                  name="country"
                  id="name"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Dodatkowa torba podręczna"
                  radius="none"
                  label="Dodatkowe informacje"
                  onChange={handleOnChange}
                  fullWidth
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 md:gap-4"></div>
            <div className="flex flex-col gap-2 md:gap-4 mt-8">
              <h3 className="font-light text-lg">Twoje miejsce docelowe</h3>
              <div className="flex flex-row gap-2 md:gap-4">
                <Input
                  type="text"
                  name="country"
                  id="name"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Polska"
                  radius="none"
                  label="Kraj"
                  isRequired={true}
                  autoComplete="on"
                  onChange={handleOnChange}
                  className=""
                />
                <Input
                  type="text"
                  name="city"
                  id="name"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Katowice"
                  radius="none"
                  label="Miejscowość"
                  isRequired={true}
                  autoComplete="on"
                  onChange={handleOnChange}
                  className=""
                />
                <Input
                  type="text"
                  name="street"
                  id="name"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Losowa 52"
                  radius="none"
                  label="Ulica"
                  isRequired={true}
                  autoComplete="on"
                  onChange={handleOnChange}
                  className=""
                />
              </div>
            </div>
          </section>
        </aside>
      </div>
      <Button
        disabled={true}
        color="secondary"
        radius="none"
        className="text-white my-8 w-full max-w-[300px]"
      >
        Zarezerwuj
      </Button>
    </div>
  );
};

export default PeopleForm;
