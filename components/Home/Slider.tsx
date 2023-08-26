"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Slider = () => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 735px)": {
          slides: { perView: 2 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3 },
        },
      },
      slides: { perView: 1 },
      loop: true,
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
    <div ref={ref} className="keen-slider container my-20 ">
      <div className="keen-slider__slide">
        <Image src="/images/paczki.jpg" alt="paczki" width={600} height={400} />
      </div>
      <div className="keen-slider__slide min-h-[80vh]">
        <Image
          src="/images/pakowanie.jpg"
          alt="paczki"
          width={600}
          height={400}
          className="h-full w-full"
        />
      </div>
      <div className="keen-slider__slide min-h-[80vh]">
        <Image
          src="/images/paczki.jpg"
          alt="paczki"
          width={600}
          height={400}
          className="h-full w-full"
        />
      </div>
      <div className="keen-slider__slide min-h-[80vh]">
        <Image
          src="/images/zwierze.jpg"
          alt="paczki"
          width={600}
          height={400}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Slider;
