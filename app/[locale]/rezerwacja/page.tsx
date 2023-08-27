import Forms from "@/components/Reservation/Forms";
import RadioPickForm from "@/components/Reservation/RadioPickForm";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const Reservation = () => {
  const t = useTranslations("reservation");

  return (
    <div className="bg-[url('/images/stripe.svg')] bg-fixed flex flex-col text-center justify-center items-center mt-20 p-4 w-screen ">
      <SectionHeader>{t("title")}</SectionHeader>
      <RadioPickForm />
      <div className="w-full lg:w-9/12 mt-8  bg-gray-50 bg-opacity-70 border-1 border-black items-center px-4">
        <Forms />
      </div>
    </div>
  );
};

export default Reservation;
