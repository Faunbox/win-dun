import { Card, Col, Container, Grid, Image, Text } from "@nextui-org/react";

const HomeServices = () => {
  return (
    <Container display="flex" alignItems="center" justify="center">
      <Text h2>Nasze usługi</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs="12" sm="6" md="4">
          <Card>
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
                esse!
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs="12" sm="6" md="4">
          <Card>
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
                esse!
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs="12" sm="6" md="4">
          <Card>
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
                esse!
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HomeServices;
