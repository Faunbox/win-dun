import { Dropdown, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TfiWorld } from "react-icons/tfi";

const FlagsDropdowns = () => {
  const { locales, route } = useRouter();
  return (
    <Dropdown>
      <Dropdown.Button color={"error"}>
        <TfiWorld />
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        {locales.map((l) => (
          <Dropdown.Item key={l}>
            <Link
              locale={l}
              className={l !== "en" ? `fi fi-${l}` : `fi fi-gb`}
              href={route}
              size={"xs"}
              style={{
                borderRadius: "4px",
                border: "1px solid black",
              }}
            >
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FlagsDropdowns;
