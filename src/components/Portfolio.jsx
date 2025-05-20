import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A scalable online store built with React and Node.js, featuring smooth UX, secure payments, and real-time inventory management.",
    techStack: ["React", "Node.js", "PostgresDB"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    projectLink: "https://example.com/ecommerce",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A sleek, responsive portfolio website showcasing professional projects and skills, built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    projectLink: "https://example.com/portfolio",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "An interactive dashboard to monitor social media metrics, built with React and Chart.js, designed for data-driven decision making.",
    techStack: ["React", "Chart.js", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    projectLink: "https://example.com/social-dashboard",
  },
  {
    id: 4,
    title: "Another Project",
    description:
      "A description for another cool project to fill out the carousel and test responsiveness.",
    techStack: ["React", "API", "GraphQL"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    projectLink: "https://example.com/another-project",
  },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-3 z-10 p-2 rounded-full bg-red-600 bg-opacity-80 hover:bg-red-700 text-white shadow-lg focus:outline-none transform -translate-y-1/2"
    onClick={onClick}
    aria-label="Next Slide"
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
    aria-label="Previous Slide"
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

const Portfolio = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet / small laptop
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-wide">
          Portfolio
        </h2>
        <Slider ref={sliderRef} {...settings}>
          {projects.map(({ id, title, description, techStack, image, projectLink }) => (
            <article
              key={id}
              tabIndex={0}
              className="mx-3 bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-400 ease-out flex flex-col overflow-hidden
                min-h-[520px]
                sm:min-h-[460px]
                xs:min-h-[380px]"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-52 sm:h-44 xs:h-36 object-cover rounded-t-2xl flex-shrink-0"
              />
              <div className="p-7 flex flex-col flex-grow h-full">
                <h3 className="text-3xl font-semibold mb-3 text-gray-900 tracking-tight leading-snug sm:text-2xl xs:text-xl">
                  {title}
                </h3>
                <p className="text-gray-700 mb-5 flex-grow leading-relaxed sm:text-sm xs:text-sm">
                  {description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 tracking-wide">
                    Tech Stack:
                  </h4>
                  <ul className="flex flex-wrap gap-3 text-sm text-red-700">
                    {techStack.map((tech, idx) => (
                      <li
                        key={idx}
                        className="bg-red-600 bg-opacity-20 text-white px-4 py-1 rounded-full font-medium shadow-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-lg shadow-md hover:shadow-lg transition-colors duration-300 text-center tracking-wide"
                  aria-label={`View project: ${title}`}
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
