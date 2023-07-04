import { Button, Grid, Radio, Text } from "@nextui-org/react";
import PplForm from "./PplForm";
import ParcelForn from "./ParcelForm";

const Tak = () => {
    return ( <Grid
        direction="column"
        sm={6}
        justify="center"
        alignItems="center"
        css={{
          "@md": { my: "20px" },
        }}
      >
        <Grid xs={12} css={{ "@xs": { direction: "column" } }}>
          <Radio.Group
            orientation="horizontal"
            value={emailContent.what ? "A" : "B"}
            onChange={() =>
              setEmailContent((prevState) => ({
                ...prevState,
                what: !emailContent.what,
              }))
            }
            css={{ $$labelColor: "white" }}
          >
            <Text size={"$lg"} css={{ px: "10px" }}>
              {t("reservation", { ns: "reservationForm" })}
            </Text>
            {t("reservationType", { returnObjects: true }).map((obj) => {
              return (
                <Radio value={obj.value} key={obj.text} color="error">
                  {obj.text}
                </Radio>
              );
            })}
          </Radio.Group>
        </Grid>
        <Grid>{emailContent.what ? <PplForm /> : <ParcelForn />}</Grid>
        <Grid alignItems="flex-end">
          <Button
            type="submit"
            color={"error"}
            disabled={!emailContent.activate ? true : false}
            css={{ "@xs": { w: "100%" }, margin: "0 auto" }}
          >
            {t("button")}
          </Button>
        </Grid>
      </Grid> );
}
 
export default Tak;