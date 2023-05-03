import { Container, Grid, Image, Text } from "@nextui-org/react";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Gallery = () => {
  const { t } = useTranslation("common");

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
        {t("gallery")}
      </Text>
      <Grid.Container gap={2} justify="center" alignItems="center">
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
