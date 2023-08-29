import Forms from "@/components/Reservation/Forms";
import RadioPickForm from "@/components/Reservation/RadioPickForm";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";

const Reservation = () => {
  const t = useTranslations("reservation");

  return (
    <div className="bg-[url('/images/map.svg')] bg-no-repeat bg-bottom  my-20 p-4 w-screen ">
      <div className="flex flex-col container mx-auto text-center justify-center items-center">
        <SectionHeader>{t("title")}</SectionHeader>
        <RadioPickForm />
        <div className="w-full lg:w-9/12 mt-8 bg-gray-50 bg-opacity-70 backdrop-blur-sm border-1 border-black items-center px-4">
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
