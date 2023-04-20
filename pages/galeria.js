import { Container, Text } from "@nextui-org/react";

const Gallery = () => {
  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
    >
      <Text h2 className="title">
        Galeria
      </Text>
    </Container>
  );
};

export default Gallery;
