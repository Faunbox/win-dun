import DatePicker, { registerLocale } from "react-datepicker";

import pl from "date-fns/locale/pl";
import nl from "date-fns/locale/nl";
import en from "date-fns/locale/en-GB";
import { useForm } from "@/context/formContext";
import { useLocale } from "next-intl";
registerLocale("pl", pl);
registerLocale("nl", nl);
registerLocale("en", en);

const Calendar = () => {
  const locale = useLocale();
  const { peopleForm, setPeopleForm } = useForm();

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 2 && day !== 3 && day !== 4;
  };

  return (
    <DatePicker
      inline
      locale={locale}
      onChange={(e) => {
        setPeopleForm((prevState) => ({ ...prevState, date: e }));
      }}
      minDate={new Date()}
      value={peopleForm.date}
      filterDate={isWeekday}
      excludeTimes={true}
    />
  );
};

export default Calendar;
