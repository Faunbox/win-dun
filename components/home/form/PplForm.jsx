import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Checkbox, Input, Spacer, Text } from "@nextui-org/react";
import Calendar from "../../../lib/Datepicker";
import { useForm } from "../../../context/formContext";

const PplForm = ({ city }) => {
  const { emailContent, setEmailContent } = useForm();
  const { t } = useTranslation("reservationForm");

  const handleOnChange = (e) => {
    setEmailContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

  return (
    <>
      {t("pplSchema", { returnObjects: "true" }).map((obj) =>
        obj.type !== "date" ? (
          <>
            <Text>{obj.label}</Text>
            <Input
              key={obj.label}
              type={obj.type}
              name={obj.name}
              aria-label={obj.label}
              onChange={handleOnChange}
              size="sm"
              bordered
              value={city && obj.value === "city" ? city : null}
            />
            <Spacer y={1} />
          </>
        ) : (
          <>
            <Text>{obj.label}</Text>
            <Calendar key={obj.label} />
            <Spacer y={1} />
          </>
        )
      )}
      <Spacer y={1} />
      <Checkbox
        defaultSelected={false}
        isRequired={false}
        name="_honey"
        aria-label="honey"
        css={{ display: "none" }}
        onChange={() =>
          setEmailContent((prevState) => ({
            ...prevState,
            honey: !prevState.honey,
          }))
        }
      ></Checkbox>
      <Checkbox
        size="sm"
        // css={{ zIndex: "-1" }}
        isSelected={emailContent.activate}
        aria-label="activate"
        isRequired={true}
        onChange={() =>
          setEmailContent((prevState) => ({
            ...prevState,
            activate: !prevState.activate,
          }))
        }
      >
        {t("checkbox")}
      </Checkbox>
    </>
  );
};

export default PplForm;
