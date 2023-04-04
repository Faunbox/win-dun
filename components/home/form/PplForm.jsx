import { Checkbox, Container, Input, Spacer, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";

const PplForm = ({ city }) => {
  const { t } = useTranslation("resevationForm");

  return (
    <>
      {t("pplSchema", { returnObjects: "true" }).map((obj) => (
        <Input
          key={obj.label}
          label={obj.label}
          type={obj.type}
          value={city && obj.value === "city" ? city : ""}
        />
      ))}
      {/* <Input label="Miejsce przyjzdu" type={"text"} />
      <Input label="Data wyjazdu" type={"date"} />
      <Input label="Ilość osób" type={"numer"} />
      <Input label="Imię i nazwisko" type={"text"} />
      <Input label="Numer telefonu" type={"numer"} /> */}
      <Spacer y={1} />
      <Checkbox size="sm">{t("checkbox")}</Checkbox>
    </>
  );
};

export default PplForm;
