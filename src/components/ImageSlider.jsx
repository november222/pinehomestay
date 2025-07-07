import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false, // xử lý bằng JS
  };

  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <div
      className="relative mt-16"
      onMouseEnter={() => {
        sliderRef.current?.slickPause();
        setHovered(true);
      }}
      onMouseLeave={() => {
        sliderRef.current?.slickPlay();
        setHovered(false);
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, i) => (
          <div key={i} className="relative">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[500px] object-cover"
            />

            {/* Nút "Khám phá ngay" khi hover */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              transition-opacity duration-700 ${hovered ? "opacity-100" : "opacity-0"}`}
            >
              <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
                Khám phá ngay
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
