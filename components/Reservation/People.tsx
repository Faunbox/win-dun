"use client";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import Calendar from "../lib/Datepicker";
import axios from "axios";
import { useFormContext, InputType } from "@/context/formContext";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MyInput, MyTextArea } from "../lib/NextUi";
import { Spinner } from "@nextui-org/react";

const PeopleForm = () => {
  const t = useTranslations("contact");
  const tr = useTranslations("reservation");

  const { peopleForm, setPeopleForm } = useFormContext();
  const [isCheckd, setIsCheckd] = useState(false);
  const [isSending, setIsSending] = useState(false);
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
    setIsSending(true)
    //Create form data obj from jsx form
    const formData = new FormData(formRef.current!);
    const topic = "Rezerwacja przejazdu";
    formData.append("topic", topic);
    const formType = "package";
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
      .catch((error) => alert(error)).finally(() => {setIsSending(false)})
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      ref={formRef}
      className="w-8/12"
      key={"tak"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-16">
        <aside className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
          <div className="flex flex-col gap-2 sm:gap-4  items-center">
            <h3 className="font-light text-lg my-4">{tr("formTitle")}</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
              <MyInput
                type="text"
                name="name"
                id="name"
                variant="bordered"
                color="secondary"
                labelPlacement="outside"
                radius="none"
                label={tr("inputs.inputNameLabel")}
                placeholder={tr("inputs.inputNamePlaceholder")}
                isRequired={true}
                autoComplete="on"
                value={peopleForm.name}
                onChange={handleOnChange}
              />
              <MyInput
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
                className="border-black"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <MyInput
                type="text"
                name="city"
                id="city"
                variant="bordered"
                labelPlacement="outside"
                radius="none"
                label={tr("inputs.inputCityLabel")}
                placeholder={tr("inputs.inputCityPlaceholder")}
                isRequired={true}
                value={peopleForm.city}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <MyInput
                type="text"
                name="street"
                id="street"
                variant="bordered"
                labelPlacement="outside"
                radius="none"
                label={tr("inputs.inputStreetLabel")}
                placeholder={tr("inputs.inputStreetPlaceholder")}
                isRequired={true}
                value={peopleForm.street}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <MyInput
                type="text"
                name="country"
                id="country"
                variant="bordered"
                labelPlacement="outside"
                value={peopleForm.country}
                radius="none"
                label={tr("inputs.inputCountryLabel")}
                placeholder={tr("inputs.inputCountryPlaceholder")}
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
              <MyInput
                type="number"
                name="number"
                id="number"
                variant="bordered"
                labelPlacement="outside"
                radius="none"
                value={peopleForm.number}
                label={tr("inputs.inputNumberLabel")}
                placeholder={tr("inputs.inputNumberPlaceholder")}
                isRequired={true}
                autoComplete="on"
                onChange={handleOnChange}
                className=""
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-around mt-5">
              <Calendar />
              <div className="flex flex-col gap-2 sm:gap-4 justify-center items-center sm:items-start">
                <div className="flex flex-col sm:flex-row justify-center items-end gap-2 sm:gap-4 w-full">
                  <MyInput
                    type="number"
                    name="phone"
                    id="phone"
                    variant="bordered"
                    labelPlacement="outside"
                    radius="none"
                    label={tr("inputs.inputPhoneLabel")}
                    placeholder={tr("inputs.inputPhonePlaceholder")}
                    value={peopleForm.phone}
                    isRequired={true}
                    autoComplete="on"
                    onChange={handleOnChange}
                    className=""
                  />
                  <MyInput
                    type="email"
                    name="email"
                    id="email"
                    variant="bordered"
                    labelPlacement="outside"
                    radius="none"
                    label={tr("inputs.inputEmailLabel")}
                    placeholder={tr("inputs.inputEmailPlaceholder")}
                    value={peopleForm.email}
                    isRequired={true}
                    autoComplete="on"
                    onChange={handleOnChange}
                    className=""
                  />
                </div>
                <MyTextArea
                  type="text"
                  name="message"
                  id="message"
                  variant="bordered"
                  value={peopleForm.message}
                  labelPlacement="outside"
                  radius="none"
                  label={tr("inputs.inputMessageLabel")}
                  placeholder={tr("inputs.inputMessagePlaceholder")}
                  onChange={handleOnChange}
                  fullWidth
                />
              </div>
            </div>

            {/* <div className="flex flex-row gap-2 sm:gap-4"></div> */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-8 items-center  ">
              <h3 className="font-light text-lg">Twoje miejsce docelowe</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
                <MyInput
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
                <MyInput
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
                <MyInput
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
              {t("terms")}
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
          {isSending? <Spinner size="sm" color="secondary" /> : tr("buttons.formButtonPeople")}
        </Button>
      </div>
    </motion.form>
  );
};

export default PeopleForm;
