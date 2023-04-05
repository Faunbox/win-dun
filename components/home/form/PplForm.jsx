import { Checkbox, Input, Spacer, Text } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import DatePicker, { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import nl from "date-fns/locale/nl";
import en from "date-fns/locale/en-GB";
import { useState } from "react";
import { useRouter } from "next/router";
registerLocale("pl", pl);
registerLocale("nl", nl);
registerLocale("en", en);

const PplForm = ({ city }) => {
  const { t } = useTranslation("reservationForm");
  const { locale } = useRouter();
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 2 && day !== 3 && day !== 4;
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
              value={city && obj.value === "city" ? city : ""}
            />
            <Spacer y={1} />
          </>
        ) : (
          <>
            <Text>{obj.label}</Text>
            <DatePicker
              key={obj.label}
              inline
              locale={locale}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              filterDate={isWeekday}
              placeholderText="Wybierz date"
            />
            <Spacer y={1} />
          </>
        )
      )}
      {/* <Input label="Miejsce przyjzdu" type={"text"} />
      <Input label="Data wyjazdu" type={"date"} />
      <Input label="Ilość osób" type={"numer"} />
      <Input label="Imię i nazwisko" type={"text"} />
      <Input label="Numer telefonu" type={"numer"} /> */}
      <Spacer y={1} />
      <Checkbox size="sm" css={{ zIndex: "-1" }}>
        {t("checkbox")}
      </Checkbox>
    </>
  );
};

export default PplForm;
