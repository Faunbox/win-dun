import PackageForm from "./Package";
import PeopleForm from "./People";

const Forms = (props: { state: string }) => {
  return (
    <div className="flex flex-col justify-center items-center container">
      {props.state === "people" ? <PeopleForm /> : <PackageForm />}
    </div>
  );
};

export default Forms;
