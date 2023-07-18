import Link from "next/link";
import RedButton from "../Typography/Button";

const Order = () => {
  return (
    <section className="bg-gray-50 flex justify-center align-middle items-center py-4">
      <div className="container flex flex-col md:flex-row justify-center items-center w-full align-middle">
        <div className="flex flex-col">
          <h2>Kontakt</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            vero sed minima quam earum dolorum magni commodi aperiam architecto
            sequi.
          </p>
          <div>
            <p>Telefon</p>
            <p>Email</p>
            <p>Cośtam</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Twoje imię"
            className="border-0 border-b-2 bg-transparent shadow-xl"
          />
          <input
            type="text"
            placeholder="Twój email"
            className="border-0 border-b-2 bg-transparent shadow-xl"
          />
          <textarea
            placeholder="Imie"
            className="border-0 border-b-2 bg-transparent shadow-xl"
          />
          <label>
            Zaakceptuj
            <input type="checkbox" name="" id="" />
          </label>
          <button>Wyślij</button>
        </div>
      </div>
    </section>
  );
};

export default Order;
