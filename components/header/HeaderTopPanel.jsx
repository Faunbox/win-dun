import { Grid, Text } from "@nextui-org/react";
import { BiMessageDetail, BiPhoneCall } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

const HeaderTopPanel = () => {
  return (
    <Grid.Container
      alignItems="center"
      justify="flex-end"
      css={{ margin: "20px 0 20px 0" }}
    >
      <Grid alignItems="center" sm={5} md={2}>
        <Text>
          <BiMessageDetail /> kontakt@wit-dun.pl
        </Text>
      </Grid>
      <Grid alignItems="center" sm={5} md={2}>
        <Text>
          <BiPhoneCall /> 123-456-789
        </Text>
      </Grid>
      <Grid alignItems="center" sm={2} md={1}>
        <Text>
          <BsFacebook />
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default HeaderTopPanel;
