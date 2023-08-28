import Image from "next/image";

const OffertCard = ({
  title,
  photo,
  description,
  number,
}: {
  title: string;
  photo: string;
  description: string;
  number: number;
}) => {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-5 p-4 border  border-black max-w-[300px] md:max-w-[330px] lg:max-w-[370px] ${
        number === 1 ? "md:scale-105" : "md:scale-100"
      } md:hover:scale-110 duration-1000`}
    >
      <h2 className="text-xl font-semibold ">{title}</h2>
      <Image
        src={photo}
        alt={title}
        width={180}
        height={280}
        className="w-full h-full max-h-[400px] object-cover"
      />
      <p className="">{description}</p>
    </div>
  );
};

export default OffertCard;
