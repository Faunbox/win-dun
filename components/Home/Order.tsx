import Link from "next/link";
import RedButton from "../Typography/Button";

const Order = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="container flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col justify-center items-center p-4 text-center">
          <h3 className="text-xl">Zarezerwuj online</h3>
          <img src="https://picsum.photos/300/400" alt="" />
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatum obcaecati enim repudiandae tempora. Nemo quos vitae ipsa
            reiciendis. Distinctio quisquam necessitatibus commodi obcaecati
            fugit incidunt autem quos maiores atque?
          </p>
          <Link href={"/rezerwacja"}>
            <RedButton>Umów przez internet</RedButton>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-center   ">
          <h3 className="text-xl">Rezerwacja telefoniczna:</h3>
          <img src="https://picsum.photos/300/400" alt="" />
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatum obcaecati enim repudiandae tempora. Nemo quos vitae ipsa
            reiciendis. Distinctio quisquam necessitatibus commodi obcaecati
            fugit incidunt autem quos maiores atque?
          </p>
          <Link href={"phone:123456789"}>
            <RedButton>Zadzwoń</RedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Order;
