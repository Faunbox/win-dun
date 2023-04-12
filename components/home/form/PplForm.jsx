import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Checkbox, Input, Spacer, Text } from "@nextui-org/react";
import DatePicker, { registerLocale } from "react-datepicker";

import pl from "date-fns/locale/pl";
import nl from "date-fns/locale/nl";
import en from "date-fns/locale/en-GB";
registerLocale("pl", pl);
registerLocale("nl", nl);
registerLocale("en", en);

const PplForm = ({ city }) => {
  const { t } = useTranslation("reservationForm");
  const { locale } = useRouter();

  const [startDate, setStartDate] = useState(null);
  const [selected, setSelected] = useState(false);

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
              name={obj.label}
              size="sm"
              bordered
              value={city && obj.value === "city" ? city : null}
            />
            <Spacer y={1} />
          </>
        ) : (
          <>
            <Text>{obj.label}</Text>
            <DatePicker
              key={obj.label}
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
      <Spacer y={1} />
      <Checkbox
        size="sm"
        // css={{ zIndex: "-1" }}
        isSelected={selected}
        isRequired={true}
        onChange={() => setSelected((prevState) => !prevState)}
      >
        {t("checkbox")}
      </Checkbox>
    </>
  );
};

export default PplForm;
