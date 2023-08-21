"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import Calendar from "../lib/Datepicker";
import axios from "axios";
import { useForm, InputType } from "@/context/formContext";
import { createPdf } from "../lib/React-pdf";
import { useRef } from "react";

const PackageForm = () => {
  const { peopleForm, setPeopleForm } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

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

    //Create form data obj from jsx form
    const formData = new FormData(formRef.current!);
    const topic = "Rezerwacja przewozu paczek lub listów";
    formData.append("topic", topic);
    const formType = "package";
    formData.append("formType", formType);

    //Create pdf Blob
    const pdf = await createPdf(peopleForm);

    const blob2Base64 = (): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        //@ts-ignore
        reader.readAsDataURL(pdf);
        reader.onload = () => resolve(reader.result!.toString().replace(/^data:(.*,)?/, ""));
        reader.onerror = (error) => reject(error);
      });
    };

    const file = await blob2Base64();

    formData.append("pdf", file);

    await axios({
      method: "POST",
      url: "/api/reservation",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data;base64",
      },
    })
      .then((msg) => alert(msg.data.message))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="flex flex-col md:flex-row gap-4 mt-16">
        <section className="flex flex-col md:flex-row gap-2 md:gap-4 w-full items-center justify-center">
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
                value={peopleForm.name}
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
                value={peopleForm.surname}
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
                value={peopleForm.city}
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
                value={peopleForm.street}
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
                value={peopleForm.country}
                onChange={handleOnChange}
                className=""
              />
              <Input
                type="number"
                name="weight"
                id="weight"
                variant="bordered"
                labelPlacement="outside"
                placeholder="20kg"
                endContent={"kg"}
                radius="none"
                label="Szacunkowa waga"
                isRequired={true}
                autoComplete="on"
                value={peopleForm.weight}
                onChange={handleOnChange}
                className=""
              />
            </div>
            <div className="flex flex-row gap-2 md:gap-4 justify-around mt-5">
              <Calendar />
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
                    value={peopleForm.phone}
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
                    value={peopleForm.email}
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
                  placeholder="Dwie paczki i list"
                  radius="none"
                  label="Dodatkowe informacje"
                  value={peopleForm.message}
                  onChange={handleOnChange}
                  fullWidth
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 md:gap-4"></div>
            <div className="flex flex-col gap-2 md:gap-4 mt-8">
              <h3 className="font-light text-lg">Twoje miejsce docelowe</h3>
              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex flex-row gap-2 md:gap-4">
                  <Input
                    type="text"
                    name="nameToGo"
                    id="nameToGo"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Lech"
                    radius="none"
                    label="Imie osoby odbierającej"
                    isRequired={true}
                    autoComplete="on"
                    value={peopleForm.nameToGo}
                    onChange={handleOnChange}
                    className=""
                  />
                  <Input
                    type="text"
                    name="surnameToGo"
                    id="surnameToGo"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Nowak"
                    radius="none"
                    label="Nazwisko osoby odbierającej"
                    isRequired={true}
                    autoComplete="on"
                    value={peopleForm.surnameToGo}
                    onChange={handleOnChange}
                    className=""
                  />
                </div>
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
                    value={peopleForm.countryToGo}
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
                    value={peopleForm.cityToGo}
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
                    value={peopleForm.streetToGo}
                    onChange={handleOnChange}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Button
        disabled={true}
        color="secondary"
        radius="none"
        type="submit"
        className="text-white my-8 w-full max-w-[300px]"
      >
        Zarezerwuj paczkę
      </Button>
    </form>
  );
};

export default PackageForm;
