"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useState } from "react";

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
      <div className="flex flex-col md:flex-row gap-4 my-16">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-6/12">
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
            </div>
          </section>
        </aside>
        <aside className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-6/12 ">
          <section className="flex flex-col gap-2 md:gap-4">
            <h3 className="font-light text-lg">Twoje miejsce docelowe</h3>
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
            </div>
          </section>
        </aside>
      </div>
      <Button
        disabled={true}
        color="primary"
        radius="none"
        className="text-white my-2 w-full max-w-[300px]"
      >
        Zarezerwuj
      </Button>
    </div>
  );
};

export default PeopleForm;
