const OffertCard = ({
  title,
  photo,
  description,
}: {
  title: string;
  photo: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-4 border max-w-[300px] md:max-w-[400px] hover:scale-110 duration-1000">
      <h2 className="text-xl font-semibold">{title}</h2>
      <img src={photo} alt="" />
      <p className="">{description}</p>
    </div>
  );
};

export default OffertCard;
