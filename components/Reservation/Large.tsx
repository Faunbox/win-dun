"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import Calendar from "../lib/Datepicker";
import axios from "axios";
import { useFormContext, InputType } from "@/context/formContext";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BigForm = () => {
  const t = useTranslations("contact");
  const tr = useTranslations("reservation");
  const { peopleForm, setPeopleForm } = useFormContext();
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
    const topic = "Rezerwacja przewozu gabarytów";
    formData.append("topic", topic);
    const formType = "large";
    formData.append("formType", formType);
    formData.append("date", peopleForm.date);

    const param = searchParams.get("type");

    await axios({
      method: "post",
      url: "/api/reservation",
      data: formData,
      params: { type: param },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((msg) => alert(msg.data.message))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="w-8/12">
      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-16">
        <aside className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full ">
          <div className="flex flex-col gap-2 sm:gap-4 w-full">
            <h3 className="font-light text-lg my-4">{tr("formTitle")}</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
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
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
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
              {/* <Input
                type="number"
                name="weight"
                id="weight"
                variant="bordered"
                labelPlacement="outside"
                endContent={"kg"}
                radius="none"
                label={tr("inputs.inputWeightLabel")}
                placeholder={tr("inputs.inputWeightPlaceholder")}
                isRequired={true}
                autoComplete="on"
                value={peopleForm.weight}
                onChange={handleOnChange}
                className=""
              /> */}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-around mt-5">
              <Calendar />
              <div className="flex flex-col gap-2 sm:gap-4 justify-center items-center sm:items-start">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
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

            {/* <div className="flex flex-row gap-2 md:gap-4"></div> */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-8 items-center  ">
              <h3 className="font-light text-lg">{tr("formTitleToGo")}</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
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
        </aside>
      </div>
      <div className="flex flex-col jusity-center items-center mt-8">
        <div className="flex flex-row justify-center items-center mt-8">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            disabled={disableButton}
            onChange={() => setIsCheckd(!isCheckd)}
            className="mr-4"
          />
          <label htmlFor="checkbox">
            {t("rodo")}{" "}
            <Link href={"/regulamin"} className="text-blue-500" target="_blank">
              {" "}
              Regulamin
            </Link>
          </label>
        </div>

        <Button
          isDisabled={!isCheckd || disableButton ? true : false}
          color="primary"
          radius="lg"
          type="submit"
          className="text-white my-8 w-full max-w-[300px]"
        >
          {tr("buttons.formButtonLarge")}
        </Button>
      </div>
    </form>
  );
};

export default BigForm;
