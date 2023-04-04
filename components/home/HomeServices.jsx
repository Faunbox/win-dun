import { Card, Container, Grid, Image, Text } from "@nextui-org/react";

const HomeServices = () => {
  return (
    <Container css={{ textAlign: "center" }}>
      <Text h2>Nasze usługi</Text>
      <Grid.Container gap={1} justify="center" alignItems="center">
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Header>Opis1</Card.Header>
            <Card.Body>
              <Image
                alt="random pic"
                src="https://picsum.photos/300/400"
                objectFit="fill"
              />
            </Card.Body>
            <Card.Footer>
              <Text b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                esse1!
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Header>Opis2</Card.Header>

            <Card.Body>
              <Image
                alt="random pic"
                src="https://picsum.photos/300/400"
                objectFit="fill"
              />
            </Card.Body>
            <Card.Footer>
              <Text b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                esse2!
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Header>Opis3</Card.Header>
            <Card.Body>
              <Image
                alt="random pic"
                src="https://picsum.photos/300/400"
                objectFit="fill"
              />
            </Card.Body>
            <Card.Footer>
              <Text b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                esse3!
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HomeServices;
