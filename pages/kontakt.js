import { Container, Text } from "@nextui-org/react";

const Contact = () => {
  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
    >
      <Text h2 className="title">
        Kontakt
      </Text>
    </Container>
  );
};

export default Contact;
