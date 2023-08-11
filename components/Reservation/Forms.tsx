import BigForm from "./Big";
import PackageForm from "./Package";
import PeopleForm from "./People";

const Forms = ({ state }: { state: string }) => {
  return (
    <div className="flex flex-col justify-center items-center container">
      {state === "people" && <PeopleForm />}
      {state === "package" && <PackageForm />}
      {state === "big" && <BigForm />}
    </div>
  );
};

export default Forms;
