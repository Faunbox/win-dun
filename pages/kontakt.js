import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {
  const { t } = useTranslation("contact");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("wysłano");
  };

  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Text h2 className="title">
        Kontakt
      </Text>
      <Spacer y={1} />
      <Grid.Container justify="space-around" alignItems="center">
        <Grid xs={12} sm={6} justify="center">
          <Text>{t("text")}</Text>
        </Grid>
        <Grid xs={12} sm={6}>
          <Card as="form" onSubmit={handleFormSubmit}>
            <Card.Header>{t("formHeader")}</Card.Header>
            <Card.Body>
              {t("formInputs", { returnObjects: "true" }).map((obj, id) => (
                <Input
                  key={id}
                  label={obj.label}
                  placeholder={obj.placeholder}
                />
              ))}
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Button type="submit">{t("formButton")}</Button>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
    },
  };
}

export default Contact;
