"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import Calendar from "../lib/Datepicker";
import axios from "axios";
import { useForm, InputType } from "@/context/formContext";
import { createPdf } from "../lib/React-pdf";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const PackageForm = () => {
  const t = useTranslations("contact");
  const tr = useTranslations("reservation");
  const { peopleForm, setPeopleForm } = useForm();
  const [isCheckd, setIsCheckd] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();

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
    setDisableButton(true);

    //Create form data obj from jsx form
    const formData = new FormData(formRef.current!);
    const topic = "Rezerwacja przewozu paczek lub listów";
    formData.append("topic", topic);
    const formType = "package";
    formData.append("formType", formType);
    formData.append("date", peopleForm.date);

    //Create pdf Blob
    const pdf = await createPdf(peopleForm);

    const blob2Base64 = (): Promise<string> => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        //@ts-ignore
        reader.readAsDataURL(pdf);
        reader.onload = () =>
          resolve(reader.result!.toString().replace(/^data:(.*,)?/, ""));
        reader.onerror = (error) => reject(error);
      });
    };

    const file = await blob2Base64();

    formData.append("pdf", file);

    const param = searchParams.get("type");

    await axios({
      method: "POST",
      url: "/api/reservation",
      data: formData,
      params: { type: param },
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
            <h3 className="font-light text-lg">{tr("formTitle")}</h3>
            <div className="flex flex-row gap-2 md:gap-4">
              <Input
                type="text"
                name="name"
                id="name"
                variant="bordered"
                labelPlacement="outside"
                radius="none"
                label={tr("inputs.inputNameLabel")}
                placeholder={tr("inputs.inputNamePlaceholder")}
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
                radius="none"
                label={tr("inputs.inputSurnameLabel")}
                placeholder={tr("inputs.inputSurnamePlaceholder")}
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
                radius="none"
                label={tr("inputs.inputCityLabel")}
                placeholder={tr("inputs.inputCityPlaceholder")}
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
                radius="none"
                label={tr("inputs.inputStreetLabel")}
                placeholder={tr("inputs.inputStreetPlaceholder")}
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
                radius="none"
                label={tr("inputs.inputCountryLabel")}
                placeholder={tr("inputs.inputCountryPlaceholder")}
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
                endContent={"kg"}
                radius="none"
                label={tr("inputs.inputNumberLabel")}
                placeholder={tr("inputs.inputNumberPlaceholder")}
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
                    radius="none"
                    label={tr("inputs.inputPhoneLabel")}
                    placeholder={tr("inputs.inputPhonePlaceholder")}
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
                    radius="none"
                    label={tr("inputs.inputEmailLabel")}
                    placeholder={tr("inputs.inputEmailPlaceholder")}
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
                  radius="none"
                  label={tr("inputs.inputMessageLabel")}
                  placeholder={tr("inputs.inputMessagePlaceholder")}
                  value={peopleForm.message}
                  onChange={handleOnChange}
                  fullWidth
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 md:gap-4"></div>
            <div className="flex flex-col gap-2 md:gap-4 mt-8">
              <h3 className="font-light text-lg">{tr("formTitleToGo")}</h3>
              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex flex-row gap-2 md:gap-4">
                  <Input
                    type="text"
                    name="nameToGo"
                    id="nameToGo"
                    variant="bordered"
                    labelPlacement="outside"
                    radius="none"
                    label={tr("inputs.inputNameToGoLabel")}
                    placeholder={tr("inputs.inputNameToGoPlaceholder")}
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
                    radius="none"
                    label={tr("inputs.inputSurnameToGoLabel")}
                    placeholder={tr("inputs.inputSurnameToGoPlaceholder")}
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
                    radius="none"
                    label={tr("inputs.inputCountryToGoLabel")}
                    placeholder={tr("inputs.inputCountryToGoPlaceholder")}
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
                    radius="none"
                    label={tr("inputs.inputCityToGoLabel")}
                    placeholder={tr("inputs.inputCityToGoPlaceholder")}
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
                    radius="none"
                    label={tr("inputs.inputStreetToGoLabel")}
                    placeholder={tr("inputs.inputStreetToGoPlaceholder")}
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
      <div className="flex flex-col jusity-center items-center">
        <div className="flex flex-row justify-center items-center">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            disabled={disableButton}
            onChange={() => setIsCheckd(!isCheckd)}
          />
          <label htmlFor="checkbox">{t("rodo")}</label>
        </div>

        <Button
          isDisabled={!isCheckd || disableButton ? true : false}
          color="secondary"
          radius="none"
          type="submit"
          className="text-white my-8 w-full max-w-[300px]"
        >
          {tr("buttons.formButtonPackage")}
        </Button>
      </div>
    </form>
  );
};

export default PackageForm;
