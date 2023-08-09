import PackageForm from "./Package";
import PeopleForm from "./People";

const Forms = ({ state }: { state: string }) => {
  return (
    <div className="flex flex-col justify-center items-center container">
      {state === "people" ? <PeopleForm /> : <PackageForm />}
    </div>
  );
};

export default Forms;
