import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="container flex flex-col md:flex-row justify-center items-center mx-auto align-middle md:p-5">
        <aside className="flex flex-col gap-5 justify-center items-center w-full md:w-6/12 mx-auto">
          <h1 className="text-7xl font-bold">Tekst głowny</h1>
          <h2 className="text-2xl">
            Tekst mniejszy Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium, blanditiis?
          </h2>
          <Link href={"/rezerwacja"} className="md:self-center">
            <button className="bg-red-700 p-4 shadow-lg text-white md:mt-4 animate-bounce">
              Zarezerwuj
            </button>
          </Link>
        </aside>
        <aside className="max-w-[50vw] w-full md:w-6/12 md:flex hidden items-center justify-center">
          <img
            src={"https://picsum.photos/300/400"}
            alt="tak"
            width={300}
            height={400}
          />
        </aside>
      </div>
    </div>
  );
};

export default HeroSection;
