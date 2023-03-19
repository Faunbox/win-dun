import { Grid, Text } from "@nextui-org/react";

const FooterMiddlePanel = () => {
    return ( <Grid
        sm={12}
        justify="space-around"
        alignItems="center"
        direction="row"
      >
        <Text>Polityka prywatności</Text>
        <Text>Regulamin</Text>
        <Text>Najczęsciej zadawane pytania</Text>
      </Grid> );
}
 
export default FooterMiddlePanel;