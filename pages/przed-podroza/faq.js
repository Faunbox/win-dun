import { Collapse, Container, Spacer, Text } from "@nextui-org/react";

const Faq = () => {
  return (
    <Container css={{ textAlign: "center" }}>
      <Container display="flex" alignItems="center" justify="center">
        <Text h2 className="title">
          Najczęściej zadawane pytania
        </Text>
      </Container>
      <Spacer y={1} />
      <Collapse.Group splitted>
        <Collapse title="Pytanie 1" bordered shadow>
          <Text>Lorem100</Text>
        </Collapse>
        <Collapse title="Pytanie 2" bordered shadow>
          <Text>Lorem100</Text>
        </Collapse>
        <Collapse title="Pytanie 3" bordered shadow>
          <Text>Lorem100</Text>
        </Collapse>
      </Collapse.Group>
    </Container>
  );
};

export default Faq;
