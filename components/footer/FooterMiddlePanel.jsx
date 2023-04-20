import { Grid, Text } from "@nextui-org/react";
import PrivacyPolitics from "../footer/PrivacyPolitics";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaqEn,
  FaqNl,
  FaqPl,
  TermsEn,
  TermsNl,
  TermsPl,
} from "../header/navbar";

const FooterMiddlePanel = () => {
  const { locale } = useRouter();

  return (
    <Grid sm={12} justify="space-around" alignItems="center" direction="row">
      <PrivacyPolitics />
      <Link href={"/regulamin"}>
        <Text>{locale === "pl" && TermsPl}</Text>
        <Text>{locale === "en" && TermsEn}</Text>
        <Text>{locale === "nl" && TermsNl}</Text>
      </Link>
      <Link href={"/przed-podroza/faq"}>
        <Text>{locale === "pl" && FaqPl}</Text>
        <Text>{locale === "en" && FaqEn}</Text>
        <Text>{locale === "nl" && FaqNl}</Text>
      </Link>
    </Grid>
  );
};

export default FooterMiddlePanel;
