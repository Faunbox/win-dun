import DatePicker, { registerLocale } from "react-datepicker";

import pl from "date-fns/locale/pl";
import nl from "date-fns/locale/nl";
import en from "date-fns/locale/en-GB";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "../context/formContext";
import { Input } from "@nextui-org/react";
registerLocale("pl", pl);
registerLocale("nl", nl);
registerLocale("en", en);

const Calendar = () => {
  const { locale } = useRouter();
  const { emailContent, setEmailContent } = useForm();

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 2 && day !== 3 && day !== 4;
  };

  return (
    <DatePicker
      locale={locale}
      selected={emailContent.date}
      onChange={(e) =>
        setEmailContent((prevState) => ({ ...prevState, date: e }))
      }
      minDate={new Date()}
      filterDate={isWeekday}
      customInput={<Input bordered size="sm" fullWidth={true} />}
      portalId="tak"
    />
  );
};

export default Calendar;
