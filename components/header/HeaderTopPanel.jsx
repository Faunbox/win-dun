import { Container, Grid, Switch, useTheme } from "@nextui-org/react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const HeaderTopPanel = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const { locales, locale, route } = useRouter();

  return (
    <Container>
      <Grid.Container
        alignItems="center"
        justify="center"
        direction="row"
        css={{ margin: "5px 0 5px 0" }}
      >
        <Grid alignItems="center" direction="row" xs={0} sm={5}>
          {locales.map((l) => (
            <Link
              key={l}
              locale={l}
              className={l !== "en" ? `fi fi-${l}` : `fi fi-gb`}
              href={route}
              size={"xs"}
              style={{
                margin: "20px",
                borderRadius: "4px",
                border: "1px solid black",
              }}
            ></Link>
          ))}
        </Grid>
        <Grid xs={0} sm={2}>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            color="warning"
            iconOff={<BsSunFill color="orange" />}
            iconOn={<BsFillMoonFill />}
          />
        </Grid>
        <Grid
          alignItems="center"
          justify="space-around"
          direction="row"
          xs={12}
          sm={5}
        >
          <Link href="mailto:kontakt@wit-dun.pl" size={"$lg @xs:$xs"}>
            <BiMessageDetail /> kontakt@wit-dun.pl
          </Link>
          <Link href="tel:123-456-789" size={"$lg @xs:$xs"}>
            <BiPhoneCall /> 123-456-789
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HeaderTopPanel;
