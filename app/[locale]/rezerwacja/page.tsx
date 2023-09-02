import Forms from "@/components/Reservation/Forms";
import RadioPickForm from "@/components/Reservation/RadioPickForm";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const Reservation = () => {
  const t = useTranslations("reservation");

  return (
    <div className="bg-[url('/images/map.svg')] bg-fixed bg-no-repeat bg-top  my-20 p-4 w-screen ">
      <div className="flex flex-col container mx-auto text-center justify-center items-center">
        <SectionHeader>{t("title")}</SectionHeader>
        <RadioPickForm />
        <Forms />
      </div>
    </div>
  );
};

export default Reservation;
