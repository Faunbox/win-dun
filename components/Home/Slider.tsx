"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 735px)": {
          slides: { perView: 1 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 2 },
        },
        "(min-width: 1240px)": {
          slides: { perView: 3 },
        },
      },
      slides: { perView: 1 },
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
        <div className="keen-slider__slide">
          <Image
            src="/images/1.jpeg"
            alt="paczki"
            width={600}
            height={400}
            className="h-full w-full"
          />
        </div>
        <div className="keen-slider__slide min-h-[80vh]">
          <Image
            src="/images/1.jpeg"
            alt="paczki"
            width={600}
            height={400}
            className="h-full w-full"
          />
        </div>
        <div className="keen-slider__slide min-h-[80vh]">
          <Image
            src="/images/1.jpeg"
            alt="paczki"
            width={600}
            height={400}
            className="object-top"
          />
        </div>
        <div className="keen-slider__slide min-h-[80vh]">
          <Image
            src="/images/1.jpeg"
            alt="paczki"
            width={600}
            height={400}
            className="h-full w-full"
          />
        </div>
        <div className="keen-slider__slide min-h-[80vh]">
          <Image
            src="/images/1.jpeg"
            alt="paczki"
            width={600}
            height={400}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
