import { Grid, Row, Spacer, Switch, Text, useTheme } from "@nextui-org/react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderTopPanel = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { locales, locale } = useRouter();

  return (
    <>
      <Grid.Container
        alignItems="center"
        justify="flex-end"
        direction="row"
        css={{ margin: "20px 0 20px 0" }}
      >
        <Grid justify="flex-start" alignItems="center" direction="row" sm={8}>
          {locales.map((l) => (
            <Link
              key={l}
              locale={l}
              className={l !== "en" ? `fi fi-${l}` : `fi fi-gb`}
              href="/"
              size={"xs"}
              style={{
                margin: "20px",
                borderRadius: "4px",
                border: "1px solid black",
              }}
            >.</Link>
          ))}
        </Grid>
        <Grid alignItems="center">
          <Text size={"$lg"}>
            <BiMessageDetail /> kontakt@wit-dun.pl
          </Text>
        </Grid>
        <Spacer x={2} />
        <Grid alignItems="center">
          <Text size={"$lg"}>
            <BiPhoneCall /> 123-456-789
          </Text>
        </Grid>
        <Spacer x={2} />
        <Grid alignItems="center" justify="center">
          <Row>
            <Text size={"$lg"}>
              <BsFacebook color="blue" />
            </Text>
            <Spacer x={2} />
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              color="warning"
              iconOff={<BsSunFill color="orange" />}
              iconOn={<BsFillMoonFill />}
            />
          </Row>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default HeaderTopPanel;
