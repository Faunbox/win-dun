import { Container, Grid, Text } from "@nextui-org/react";

const HomeAbout = () => {
  return (
    <Container display="flex" alignItems="center" justify="center">
      <Text h2>O nas</Text>
      <Grid.Container>
        <Grid xs={12} sm={6}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          itaque. Impedit voluptates assumenda delectus animi omnis odio,
          architecto esse quidem mollitia atque fugit, aliquam doloribus
          blanditiis ut alias ullam temporibus velit eius voluptatum dolore!
          Neque labore ut rem a alias repudiandae. Quaerat iste officiis
          consequuntur perferendis itaque cum assumenda cumque necessitatibus
          aut, repellat, odio voluptatum magni rem dolor voluptates. Similique!
        </Grid>
        <Grid xs={12} sm={6}>
          MAPA EUROPY
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HomeAbout;
