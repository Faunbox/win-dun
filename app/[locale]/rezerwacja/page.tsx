"use client";

import Forms from "@/components/Reservation/Forms";
import SectionHeader from "@/components/Typography/SectionHeader";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Reservation = () => {
  const t = useTranslations("gallery");

  const [selected, setSelected] = useState<string>("people");

  return (
    <div className="bg-gray-50 flex flex-col text-center justify-center items-center p-4 w-screen ">
      <SectionHeader>Rezerwacja przejazdu</SectionHeader>
      <div className="flex flex-row p-4 border-1 border-black gap-4">
        <RadioGroup
          label="Wybierz odpowiedni formularz"
          color="secondary"
          defaultValue="people"
          value={selected}
          orientation="horizontal"
          onValueChange={setSelected}
          className="items-center"
        >
          <Radio value="people">
            <p className="text-sm font-light">Osoby</p>
          </Radio>
          <Radio value="package">
            <p className="text-sm font-light">Paczka</p>
          </Radio>
        </RadioGroup>
      </div>
      <div className="bg-gradient-to-b from-gray-100 to-gray-50 w-9/12 mt-8">

        <Forms state={selected} />
      </div>
    </div>
  );
};

export default Reservation;
