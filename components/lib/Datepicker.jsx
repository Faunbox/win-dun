import DatePicker, { registerLocale } from "react-datepicker";

import pl from "date-fns/locale/pl";
import nl from "date-fns/locale/nl";
import en from "date-fns/locale/en-GB";
import { Input } from "@nextui-org/input";
import { useForm } from "@/context/formContext";
import { useLocale } from "next-intl";
registerLocale("pl", pl);
registerLocale("nl", nl);
registerLocale("en", en);

const Calendar = ({ label, placeholder }) => {
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
      selected={peopleForm.date}
      value={peopleForm.date}
      onChange={(e) =>
        setPeopleForm((prevState) => ({ ...prevState, date: e }))
      }
      minDate={new Date()}
      filterDate={isWeekday}
      // customInput={
      //   <Input
      //     type="date"
      //     name="date"
      //     id="date"
      //     variant="bordered"
      //     labelPlacement="outside"
      //     // placeholder={placeholder ? placeholder : null}
      //     radius="none"
      //     label={label}
      //     isRequired={true}
      //     className="w-full"
      //   />
      // }
      // portalId="tak"
      excludeTimes={true}
    />
  );
};

export default Calendar;
