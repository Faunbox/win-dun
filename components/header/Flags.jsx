import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const FlagsComponent = () => {
  const { locales, route } = useRouter();

  return (
    <>
      {locales.map((l) => (
        <Navbar.Item key={l}>
          <Link
            locale={l}
            className={l !== "en" ? `fi fi-${l}` : `fi fi-gb`}
            href={route}
            size={"xs"}
            style={{
              borderRadius: "4px",
              border: "1px solid black",
            }}
          ></Link>
        </Navbar.Item>
      ))}
    </>
  );
};

export default FlagsComponent;
