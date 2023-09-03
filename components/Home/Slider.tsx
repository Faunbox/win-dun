"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Slider = () => {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 735px)": {
          slides: { perView: 1, origin: "center" },
        },
        "(min-width: 810px)": {
          slides: { perView: 2, origin: "center" },
        },
        "(min-width: 1240px)": {
          slides: { perView: 3, origin: "auto" },
        },
      },
      slides: { perView: 1, origin: "center" },
      loop: true,
      renderMode: "performance",
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="flex justify-center mx-auto bg-footer items-center">
      <div
        ref={ref}
        className="keen-slider w-screen max-w-[1536px] transform-cpu"
      >
        {images.map((img) => (
          <div className="keen-slider__slide" key={img}>
            <Image
              src={img}
              alt="paczki"
              width={600}
              height={400}
              className="max-h-[360px] object-scale-down lg:object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
