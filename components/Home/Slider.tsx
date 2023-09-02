"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Slider = () => {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
  ];

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 735px)": {
          slides: { perView: 1, origin: "center" },
        },
        "(min-width: 1000px)": {
          slides: { perView: 2, origin: "center" },
        },
        "(min-width: 1240px)": {
          slides: { perView: 4, origin: "center" },
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
              className="max-h-[320px] object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
