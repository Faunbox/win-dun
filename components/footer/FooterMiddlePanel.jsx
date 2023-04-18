import { Grid, Text } from "@nextui-org/react";
import PrivacyPolitics from '../footer/PrivacyPolitics'

const FooterMiddlePanel = () => {
    return ( <Grid
        sm={12}
        justify="space-around"
        alignItems="center"
        direction="row"
      >
        <PrivacyPolitics />
        <Text>Regulamin</Text>
        <Text>Najczęsciej zadawane pytania</Text>
      </Grid> );
}
 
export default FooterMiddlePanel;