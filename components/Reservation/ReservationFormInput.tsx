import { InputType, useFormContext } from "@/context/formContext";
import { Input } from "@nextui-org/react";

const ReservationFormInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const { peopleForm, setPeopleForm } = useFormContext();

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

  return (
    <>
      <Input
        type="text"
        name="name"
        id="name"
        variant="bordered"
        color="secondary"
        labelPlacement="outside"
        radius="none"
        label={label}
        placeholder={placeholder}
        isRequired={true}
        autoComplete="on"
        value={peopleForm.name}
        onChange={handleOnChange}
        classNames={{
          inputWrapper: ["border-black"],
        }}
      />
    </>
  );
};

export default ReservationFormInput;
