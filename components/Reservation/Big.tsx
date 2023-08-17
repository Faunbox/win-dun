"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import Calendar from "../lib/Datepicker";
import axios from "axios";
import { useForm, InputType } from "@/context/formContext";

const BigForm = () => {
  const { peopleForm, setPeopleForm } = useForm();

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPeopleForm((prevState: InputType) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const {
      name,
      surname,
      email,
      city,
      street,
      country,
      date,
      phone,
      weight,
      message,
      countryToGo,
      cityToGo,
      streetToGo,
    }: InputType = peopleForm;

    const topic = "Rezerwacja przewozu gabarytów";

    await axios({
      method: "post",
      url: "/api/reservation",
      data: {
        name,
        surname,
        email,
        city,
        street,
        country,
        date,
        weight,
        phone,
        message,
        countryToGo,
        cityToGo,
        streetToGo,
        topic,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((msg) => alert(msg.data.message))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        <aside className="flex flex-col md:flex-row gap-2 md:gap-4 w-full ">
          <div className="flex flex-col gap-2 md:gap-4">
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
                id="surname"
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
                id="city"
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
                id="street"
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
                id="country"
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
                name="weight"
                id="weight"
                variant="bordered"
                labelPlacement="outside"
                placeholder="200kg"
                endContent={"kg"}
                radius="none"
                label="Szacunkowa waga"
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
                    name="phone"
                    id="phone"
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
                    name="email"
                    id="email"
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
                  name="message"
                  id="message"
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
                  name="countryToGo"
                  id="countryToGo"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Holandia"
                  radius="none"
                  label="Kraj"
                  isRequired={true}
                  autoComplete="on"
                  onChange={handleOnChange}
                  className=""
                />
                <Input
                  type="text"
                  name="cityToGo"
                  id="cityToGo"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Amsterdam"
                  radius="none"
                  label="Miejscowość"
                  isRequired={true}
                  autoComplete="on"
                  onChange={handleOnChange}
                  className=""
                />
                <Input
                  type="text"
                  name="streetToGo"
                  id="streetToGo"
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
          </div>
        </aside>
      </div>
      <Button
        disabled={true}
        color="secondary"
        radius="none"
        type="submit"
        className="text-white my-8 w-full max-w-[300px]"
      >
        Zarezerwuj przejazd
      </Button>
    </form>
  );
};

export default BigForm;