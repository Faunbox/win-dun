import Image from "next/image";
import { FaHourglassHalf } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

export default function Home() {
  return (
    <main className="container flex justify-center items-center min-w-screen min-h-screen bg-gradient-to-b from-gray-400 to-gray-100 flex-col p-12 gap-4 md:gap-32">
      <h1 className="text-4xl md:text-5xl animate-pulse">
        Strona w przebudowie...
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col w-full md:w-5/12 gap-16">
          <div>
            <Image
              src={"/images/logo.png"}
              alt="Logo Wit-dun"
              width={400}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl">Dane kontaktowe:</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <BsFillTelephoneInboundFill />
                <a
                  href="phone:505216526 "
                  className="cursor-pointer text-red-800 text-2xl"
                >
                  +48 505 216 526
                </a>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineMail />
                <a
                  href="mailto:kontakt@wit-dun.eu"
                  className="cursor-pointer text-red-800 text-2xl"
                >
                  kontakt@wit-dun.eu
                </a>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <AiFillFacebook />
                <a
                  href="https://www.facebook.com/groups/2210077652588059/user/100001886125742"
                  className="cursor-pointer text-red-800 text-2xl"
                >
                  Wit Dun
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-5/12 flex-col gap-2">
          <h2 className="text-3xl">Czym się zajmujemy?</h2>
          <p className="text-xl">
            Od lat świadczymy profesjonalne usługi przewozu osób, paczek oraz
            zwierząt, zapewniając naszym klientom bezpieczne i komfortowe
            podróże z{" "}
            <span className="underline text-red-800 font-bold">
              Polski do Niemiec i Holandii
            </span>
            . Nasz priorytet to zadowolenie i satysfakcja naszych klientów.
            Dlatego dbamy o każdy detal naszych usług, gwarantując wysoką jakość
            i niezawodność. Nasza wykwalifikowana kadra, doświadczenie oraz
            nowoczesny tabor pojazdów pozwala nam realizować transport na
            najwyższym poziomie.
          </p>
        </div>
      </div>
    </main>
  );
}
