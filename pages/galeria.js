import { Container, Grid, Image, Text } from "@nextui-org/react";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

const Gallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number + 1,
    });
  }

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/302",
    "https://picsum.photos/200/303",
    "https://picsum.photos/200/304",
    "https://picsum.photos/200/305",
  ];

  return (
    <Container
      display="flex"
      css={{ textAlign: "center" }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Text h2 className="title">
        Galeria
      </Text>
      <Grid.Container gap={2}>
        {images.map((image, index) => (
          <Grid key={image}>
            <Image
              src={image}
              alt="random pic"
              showSkeleton
              loading="lazy"
              onClick={() => openLightboxOnSlide(index)}
              css={{ cursor: "pointer" }}
            />
          </Grid>
        ))}
      </Grid.Container>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
      />
    </Container>
  );
};

export default Gallery;
