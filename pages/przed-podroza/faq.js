import { Collapse, Container, Spacer, Text } from "@nextui-org/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Faq = () => {
  const { t } = useTranslation("faq");

  return (
    <Container css={{ textAlign: "center" }}>
      <Container display="flex" alignItems="center" justify="center">
        <Text h2 className="title">
          {t("title")}
        </Text>
      </Container>
      <Spacer y={1} />
      <Collapse.Group splitted>
        {t("questions", { returnObjects: true, replace: true }).map(
          (obj, id) => (
            <Collapse
              title={obj.question}
              bordered
              shadow
              key={obj.question + id}
            >
              <Text>{obj.response}</Text>
            </Collapse>
          )
        )}
      </Collapse.Group>
    </Container>
  );
};

export default Faq;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["faq"])),
    },
  };
}
