"use client";

import Forms from "@/components/Reservation/Forms";
import SectionHeader from "@/components/Typography/SectionHeader";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { useTranslations } from "next-intl";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Reservation = () => {
  // const t = useTranslations("gallery");
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type")?.toString();
  const [selected, setSelected] = useState<string>(typeParam!);

  return (
    <div className="bg-[url('/images/stripe.svg')] flex flex-col text-center justify-center items-center mt-20 p-4 w-screen ">
      <SectionHeader>Rezerwacja przejazdu</SectionHeader>
      <div className="flex flex-row p-4 border-1 border-black gap-4 z-10 bg-gray-50">
        <RadioGroup
          label="Wybierz odpowiedni formularz"
          color="secondary"
          defaultValue="people"
          value={selected}
          orientation="horizontal"
          onValueChange={setSelected}
          className="items-center"
        >
          <Radio
            value="people"
            onClick={() => {
              router.replace(`?type=people`);
            }}
          >
            <p className="text-sm font-light">Osoby</p>
          </Radio>
          <Radio
            value="package"
            onClick={() => {
              router.replace("?type=package");
              console.log(searchParams.get("type"));
            }}
          >
            <p className="text-sm font-light">Paczka</p>
          </Radio>
          <Radio
            value="large"
            onClick={() => {
              router.replace("?type=large");
              console.log(searchParams.get("type"));
            }}
          >
            <p className="text-sm font-light">Gabaryty</p>
          </Radio>
        </RadioGroup>
      </div>
      <div className="w-full lg:w-9/12 mt-8  bg-gray-50 bg-opacity-70 border-1 border-black items-center px-4">
        <Forms state={typeParam?.toString()!} />
      </div>
    </div>
  );
};

export default Reservation;
