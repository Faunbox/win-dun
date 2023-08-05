import ImageGallery from "@/components/Gallery/ImageGallery";
import SectionHeader from "@/components/Typography/SectionHeader";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Gallery = () => {
  const t = useTranslations("gallery");

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex-col justify-center items-center text-center px-4">
        <SectionHeader>{t("title")}</SectionHeader>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          {/* Text about buses */}
          <aside className="w-full md:w-6/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quisquam explicabo quia maiores voluptatibus! Deserunt illo
              voluptates recusandae inventore expedita!
            </p>
          </aside>
          {/* Photos of buses */}
          <aside className="w-full md:w-6/12 flex justify-center items-center">
            <img
              src={"https://picsum.photos/400/500"}
              alt="buses"
              width={400}
              height={500}
            ></img>
          </aside>
        </div>
        <h3 className="text-2xl font-bold my-4">Zdjęcia naszych busów</h3>
        <ImageGallery />
      </div>
    </>
  );
};

export default Gallery;
