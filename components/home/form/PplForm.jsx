import { Input, Text } from "@nextui-org/react";

const PplForm = ({ city }) => {
  return <Input label="Ludzie" value={city ? city : ""} />;
};

export default PplForm;
