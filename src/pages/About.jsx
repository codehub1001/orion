import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Chukwuka Erondu",
    role: "Founder & Full stack Developer",
    photo: "",
    bio: "Chukwuka brings years of full-stack experience. With deep expertise in scalable web systems, he's passionate about building impactful software that solves real business problems.",
    socials: {
      linkedin: "https://www.linkedin.com/in/chukwuka-erondu-4344232bb/",
      twitter: "https://twitter.com/chukwuka",
      github: "https://github.com/codehub1001",
    },
  },
  {
    id: 2,
    name: "Francis Ifeanyi",
    role: "UI/UX Designer",
    photo: "/img/francis.jpg",
    bio: "Francis crafts user-friendly digital experiences with elegance and clarity. he ensures that every interface is not only beautiful but intuitive, with the user at the center.",
    socials: {
      linkedin: "",
      twitter: "",
      github: "",
    },
  },
  {
    id: 3,
    name: "Daniel Daystar",
    role: "Project Manager",
    photo: "",
    bio: "Daniel coordinates projects from idea to launch. His strength lies in seamless collaboration, timely delivery, and ensuring both client satisfaction and product quality.",
    socials: {
      linkedin: "",
      twitter: "",
      github: "",
    },
  },
  {
    id: 4,
    name: "Chibuzor emekalam",
    role: "Back-End Developer",
    photo: "",
    bio: "chibuzor specializes in building robust, scalable server-side applications. he is dedicated to optimizing system performance and ensuring reliable integration across platforms.",
    socials: {
      linkedin: "",
      twitter: "",
      github: "",
    },
  },
  // New members added here
  {
    id: 5,
    name: "Segun Adeniyi ",
    role: "WordPress Developer",
    photo: "",
    bio: "Segun builds engaging, responsive WordPress websites with a focus on usability and SEO. he thrives on customizing themes and plugins to fit unique client needs.",
    socials: {
      linkedin: "",
      twitter: "",
      github: "",
    },
  },
  {
    id: 6,
    name: "Isreal Macualey",
    role: "Front-End Developer",
    photo: "",
    bio: "Isreal specializes in crafting fast, accessible, and visually appealing front-end interfaces using React, TailwindCSS, and modern JavaScript.",
    socials: {
      linkedin: "",
      twitter: "",
      github: "",
    },
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeInOut" },
  }),
};

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          At Orion Tech-Hub, we’re committed to helping businesses thrive through tailored digital
          solutions. From modern websites to custom platforms, our team is focused on delivering
          innovation, performance, and meaningful results.
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto text-center text-gray-700 mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>
            Founded with the vision to empower African businesses, Orion Tech-Hub combines
            technical excellence with creative design to build digital products that truly
            resonate with users.
          </p>
          <p>
            Our core values are innovation, integrity, and client success — which means we prioritize
            transparent communication, adaptive solutions, and delivering beyond expectations.
          </p>
          <p>
            Whether you’re a startup looking for your first MVP or an established company seeking
            to scale, our diverse expertise ensures a seamless experience from concept to launch
            and beyond.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(({ id, name, role, photo, bio, socials }, index) => (
            <motion.div
              key={id}
              tabIndex={0}
              aria-label={`${name}, ${role}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 ease-in-out p-8 flex flex-col text-center focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              <img
                src={photo}
                alt={`Photo of ${name}`}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-red-600"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-5">
                {role}
              </p>
              <p className="text-gray-800 text-base leading-relaxed">{bio}</p>
              <div className="flex justify-center space-x-6 mt-6 text-red-600 text-xl">
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} LinkedIn`}
                    className="hover:text-red-800 transition"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {socials.twitter && (
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} Twitter`}
                    className="hover:text-red-800 transition"
                  >
                    <FaTwitter />
                  </a>
                )}
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} GitHub`}
                    className="hover:text-red-800 transition"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
