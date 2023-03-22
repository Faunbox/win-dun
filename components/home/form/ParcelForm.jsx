import { Input, Text } from "@nextui-org/react";

const ParcelForn = ({ city }) => {
  return <Input label="Paczka" value={city ? city : ""} />;
};

export default ParcelForn;
