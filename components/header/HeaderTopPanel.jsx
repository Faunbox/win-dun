import { Grid, Row, Spacer, Switch, Text, useTheme } from "@nextui-org/react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme as useNextTheme } from "next-themes";

const HeaderTopPanel = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Grid.Container
      alignItems="center"
      justify="flex-end"
      css={{ margin: "20px 0 20px 0" }}
    >
      <Grid alignItems="center" sm={6} md={2}>
        <Text size={"$lg"}>
          <BiMessageDetail /> kontakt@wit-dun.pl
        </Text>
      </Grid>
      <Spacer x={2} />
      <Grid alignItems="center" sm={6} md={2}>
        <Text size={"$lg"}>
          <BiPhoneCall /> 123-456-789
        </Text>
      </Grid>
      <Spacer x={2} />
      <Grid alignItems="center" justify="center" sm={12} md={1}>
        <Row>
          <Text size={"$lg"}>
            <BsFacebook color="blue" />
          </Text>
          <Spacer x={2} />
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            color="warning"
            iconOff={<BsSunFill filled color="orange" />}
            iconOn={<BsFillMoonFill fillded />}
          />
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default HeaderTopPanel;
