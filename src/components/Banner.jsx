import React, { useEffect, useState, useRef } from "react";

const banners = [
  {
    id: 1,
    title: "Welcome to Orion Tech-Hub",
    subtitle: "Top web development services in Nigeria",
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80",
    ctaText: "Get Started",
    ctaLink: "/contact",
  },
  {
    id: 2,
    title: "Build Your Dream Website",
    subtitle: "Professional and affordable solutions",
    bgImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80",
    ctaText: "Our Rates",
    ctaLink: "/rates",
  },
  {
    id: 3,
    title: "Grow Your Business Online",
    subtitle: "Expert digital strategies for your success",
    bgImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    ctaText: "Learn More",
    ctaLink: "/about",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [showArrows, setShowArrows] = useState(true);
  const intervalRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Hide/show arrows on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowArrows(false);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setShowArrows(true);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    resetInterval();
  };

  const goNext = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    resetInterval();
  };

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden rounded-md shadow-xl">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
          }`}
          style={{
            backgroundImage: `url(${banner.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              {banner.title}
            </h2>
            <p className="text-lg sm:text-2xl md:text-3xl mb-6 font-medium">
              {banner.subtitle}
            </p>

            <a
              href={banner.ctaLink}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg"
            >
              {banner.ctaText}
            </a>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              resetInterval();
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white scale-110" : "bg-white/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full z-50 shadow-lg transition-opacity duration-300"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full z-50 shadow-lg transition-opacity duration-300"
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default BannerSlider;
