"use client";
import { useSearchParams } from "next/navigation";
import BigForm from "./Large";
import PackageForm from "./Package";
import PeopleForm from "./People";

const Forms = () => {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type")?.toString();

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      {typeParam === "people" && <PeopleForm />}
      {typeParam === "package" && <PackageForm />}
      {typeParam === "large" && <BigForm />}
    </div>
  );
};

export default Forms;
