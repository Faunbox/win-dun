"use client";
import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <center className="min-h-[70vw] flex items-center justify-center">
      <CircularProgress
        size="lg"
        aria-label="Loading..."
        label="Ładowanie ..."
        showValueLabel={true}
      />
    </center>
  );
}
