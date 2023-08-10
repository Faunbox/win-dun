import Link from "next/link";

const HowToReserve = () => {
  return (
    <section>
      <div className="bg-transparent text-black ">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-4 md:my-4">
          <div className="flex flex-col w-full sticky md:top-28 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-red-700 uppercase tracking-loose">
              Informacja
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Jak zarezerwować przejazd?
            </p>
            <p className="text-sm md:text-base text-black-50 mb-4">
              Przedstawiamy krótki poradnik w jaki sposób zarezerwować przejazd
              lub wysłać paczkę przez nasz forumlarz rezerwacyjny
            </p>
            <Link
              href="/rezerwacja"
              className="bg-transparent mr-auto hover:bg-red-700 text-red-700 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-700 hover:border-transparent self-end"
            >
              Zarezerwuj przejazd
            </Link>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-solid right-[50%] bg-[#FFC100]"></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-solid left-[50%] bg-[#FFC100]"></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-black">Krok 1</p>
                    <h4 className="mb-3 mr-3 font-bold text-lg md:text-xl">
                      Wypełnienie forumalrza
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Wypełnij pola formularza, upewniając się, że dane są
                      prawidłowe. W przeciwnym razie nasi pracownicy mogą nie
                      zarezerwować waszego przejazdu! Aby mieć pewność, zalecamy
                      jak najszybszą rezerwację, nie później niż 3 dni przed
                      planowanym wyjazdem
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-black">Krok 2</p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      Potwierdzenie terminu
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Na wysłany formularz odpowiadamy mailowo do 24h - w
                      odpowiedzni znajdziecie Państwo cenę za przejazd, czy są
                      wolne miejsca, numer konta bankowego.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-black"> Krok 3</p>
                    <h4 className="mb-3 font-bold text-lg md:text-xl">
                      Opłata za przejazd
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Po otrzymaniu informacji zwrotnej należy opłacić przejazd
                      oraz w odpowiedzi na maila przesłać potwierdzenie
                      przelewu. Tytuł przelewu powinien zawierać Imię i nazwisko
                      oraz datę przejazdu.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-black">Krok 4.</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-xl text-left">
                      Wyjazd
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                      Zjawienie się minimum 15min przed planowaną godziną
                      odjazdu.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToReserve;
