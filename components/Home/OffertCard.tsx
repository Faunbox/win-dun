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
      className={`flex justify-center items-center flex-col gap-5 p-4 border border-black max-w-[300px]  "md:max-w-[420px]" ${
        number === 1 ? "md:scale-105" : "md:scale-95"
      } hover:scale-110 duration-1000`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <Image src={photo} alt="" width={280} height={180} />
      <p className="">{description}</p>
    </div>
  );
};

export default OffertCard;
