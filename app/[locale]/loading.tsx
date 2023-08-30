"use client";
import { CircularProgress } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("core");

  return (
    <center className="min-h-[70vw] flex items-center justify-center">
      <CircularProgress
        size="lg"
        aria-label="Loading..."
        label={t("loading")}
        showValueLabel={true}
      />
    </center>
  );
}
