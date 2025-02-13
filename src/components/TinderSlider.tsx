/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import AssistWalkerRoundedIcon from "@mui/icons-material/AssistWalkerRounded";
import HeightRoundedIcon from "@mui/icons-material/HeightRounded";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
// import FemaleRoundedIcon from "@mui/icons-material/FemaleRounded";
import MaleRoundedIcon from "@mui/icons-material/MaleRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "swiper/css";
import "swiper/css/effect-cards";
// import Image from "next/image";

const TinderSlider = () => {
  const slides = [
    { id: 1, image: "https://picsum.photos/350/600?random=1" },
    { id: 2, image: "https://picsum.photos/350/600?random=2" },
    { id: 3, image: "https://picsum.photos/350/600?random=3" },
    { id: 4, image: "https://picsum.photos/350/600?random=4" },
    { id: 5, image: "https://picsum.photos/350/600?random=5" },
    { id: 6, image: "https://picsum.photos/350/600?random=6" },
    { id: 7, image: "https://picsum.photos/350/600?random=7" },
    { id: 8, image: "https://picsum.photos/350/600?random=8" },
    { id: 9, image: "https://picsum.photos/350/600?random=9" },
    { id: 10, image: "https://picsum.photos/350/600?random=10" },
    { id: 11, image: "https://picsum.photos/350/600?random=11" },
    { id: 12, image: "https://picsum.photos/350/600?random=12" },
    { id: 13, image: "https://picsum.photos/350/600?random=13" },
    { id: 14, image: "https://picsum.photos/350/600?random=14" },
    { id: 15, image: "https://picsum.photos/350/600?random=15" },
    { id: 16, image: "https://picsum.photos/350/600?random=16" },
    { id: 17, image: "https://picsum.photos/350/600?random=17" },
    { id: 18, image: "https://picsum.photos/350/600?random=18" },
  ];

  return (
    <div
      className="overflow-hidden py-10"
      style={{
        width: "100vw",
        height: "600px",
        maxHeight: "600px",
        // aspectRatio: "1:1",
      }}
    >
      <Swiper
        effect="cards"
        modules={[EffectCards]}
        className="h-full w-[70%] "
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="h-full rounded-lg shadow-[0px_6px_20px_-3px_#525252ad]"
          >
            <div className="size-full relative">
              <img
                alt="avatar"
                className="w-full h-full object-cover"
                src={slide.image}
              />
              <div className="z-50 absolute inset-0  ">
                <div
                  style={{ backdropFilter: "blur(10px)" }}
                  className="px-[2%] pt-1 flex items-center text-[9px] pb-1.5 bg-[#6b6b6b3d] text-white justify-between"
                >
                  <div className="flex items-center gap-0.5 justify-center">
                    <MaleRoundedIcon sx={{ fontSize: 17 }} />
                    مسعود
                  </div>

                  <div className="flex items-center gap-0.5 justify-center">
                    <AssistWalkerRoundedIcon sx={{ fontSize: 17 }} />
                    22 سال
                  </div>

                  <div className="flex items-center gap-0.5 justify-center">
                    <LocationOnIcon sx={{ fontSize: 14 }} />
                    رشت
                  </div>

                  <div className="flex items-center gap-0.5 justify-center">
                    <HeightRoundedIcon sx={{ fontSize: 16 }} />
                    174cm
                  </div>

                  <div className="flex items-center gap-0.5 justify-center">
                    <ScaleRoundedIcon sx={{ fontSize: 14 }} />
                    82kg
                  </div>
                </div>

                <div
                  style={{ backdropFilter: "blur(7px)" }}
                  className="bottom-0 absolute bg-[#1b1b1b45]  w-full text-white text-[10px] px-[2%] pb-[4px] text-justify"
                >
                  ماجراجو، عاشق سفر و قهوه ☕️✨ همیشه دنبال یه دلیل خوب برای
                  خندیدن! 😄 بزن بریم یه مکالمه جذاب شروع کنیم! 🚀
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TinderSlider;
