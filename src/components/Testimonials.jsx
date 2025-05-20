import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    feedback:
      "Working with this developer was a breeze! The project was delivered on time with great quality and excellent communication throughout.",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback:
      "Their attention to detail and ability to solve complex problems really impressed our team. Highly recommended for any project.",
  },
  {
    id: 3,
    name: "Emily Davis",
    feedback:
      "The interface was intuitive and clean, and the collaboration process was smooth. Would love to work together again!",
  },
  {
    id: 4,
    name: "James Wilson",
    feedback:
      "Delivered beyond expectations, with great professionalism and skill. The final product helped us increase user engagement significantly.",
  },
];

// Reusing your custom arrows (NextArrow and PrevArrow) for consistency

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-3 z-10 p-2 rounded-full bg-red-600 bg-opacity-80 hover:bg-red-700 text-white shadow-lg focus:outline-none transform -translate-y-1/2"
    onClick={onClick}
    aria-label="Next Testimonial"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-3 z-10 p-2 rounded-full bg-red-600 bg-opacity-80 hover:bg-red-700 text-white shadow-lg focus:outline-none transform -translate-y-1/2"
    onClick={onClick}
    aria-label="Previous Testimonial"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const UserIcon = () => (
  <svg
    className="w-16 h-16 text-red-600"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    />
  </svg>
);

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: testimonials.length > 2,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-wide">
          What Clients Say
        </h2>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map(({ id, name, feedback }) => (
            <article
              key={id}
              tabIndex={0}
              className="mx-3 bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-400 ease-out flex flex-col overflow-hidden min-h-[360px] p-8"
            >
              <p className="text-gray-700 mb-8 text-lg leading-relaxed flex-grow">
                “{feedback}”
              </p>
              <div className="flex items-center gap-4">
                <UserIcon />
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
