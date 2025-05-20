import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Create lightning-fast websites tailored to your business goals. Enjoy responsive designs and seamless user experiences.",
    features: [
      "Pixel-perfect custom designs",
      "Responsive on all devices",
      "Secure e-commerce platforms",
      "Easy content management",
      "Robust API integrations",
    ],
    icon: (
      <svg
        className="w-12 h-12 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-6 8v-4m0-4v-4m-6 4h12" />
      </svg>
    ),
    learnMoreLink: "/rates",
  },
  {
    id: 2,
    title: "Website Management",
    description:
      "We handle your website’s health, from updates and backups to security, so you can focus on your business.",
    features: [
      "Regular updates and patches",
      "Daily backups & recovery",
      "Speed & performance tuning",
      "Malware protection",
      "24/7 monitoring",
    ],
    icon: (
      <svg
        className="w-12 h-12 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx={12} cy={12} r={10} strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    learnMoreLink: "/rates",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "From logos to packaging, we craft visuals that connect emotionally and leave lasting impressions.",
    features: [
      "Logo & brand identity",
      "Marketing & social assets",
      "Print-ready designs",
      "Custom illustrations",
      "Packaging & product design",
    ],
    icon: (
      <svg
        className="w-12 h-12 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect x={3} y={4} width={18} height={16} rx={2} ry={2} strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    learnMoreLink: "/rates",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const OurServices = () => {
  return (
    <section id="service" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, description, features, icon, learnMoreLink }, index) => (
            <motion.div
              key={id}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8 flex flex-col hover:shadow-2xl transition duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">{description}</p>

              <ul className="text-left text-gray-700 mb-6 list-disc list-inside space-y-2 text-sm">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <a
                href={learnMoreLink}
                className="mt-auto inline-block text-white bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium transition"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
