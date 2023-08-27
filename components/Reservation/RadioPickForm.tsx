"use client";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const RadioPickForm = () => {
  const t = useTranslations("reservation");
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type")?.toString();
  const [selected, setSelected] = useState<string>(typeParam!);

  return (
    <div className="flex flex-row p-4 border-1 border-black gap-4 z-10 bg-gray-50">
      <RadioGroup
        label={t("formLabel")}
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
          <p className="text-sm font-light">{t("radioPeople")}</p>
        </Radio>
        <Radio
          value="package"
          onClick={() => {
            router.replace("?type=package");
            console.log(searchParams.get("type"));
          }}
        >
          <p className="text-sm font-light">{t("radioPackage")}</p>
        </Radio>
        <Radio
          value="large"
          onClick={() => {
            router.replace("?type=large");
            console.log(searchParams.get("type"));
          }}
        >
          <p className="text-sm font-light">{t("radioLarge")}</p>
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioPickForm;
