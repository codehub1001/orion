import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  BoltIcon,
  LifebuoyIcon,
  CodeBracketIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Reliable & Secure",
    description:
      "We build scalable, secure, and reliable systems that safeguard your data and provide peace of mind for you and your users.",
    icon: ShieldCheckIcon,
  },
  {
    title: "High Performance",
    description:
      "Optimized for speed and efficiency, our solutions deliver fast loading times and seamless user experiences across all devices.",
    icon: BoltIcon,
  },
  {
    title: "Clean Code & Architecture",
    description:
      "Our development approach follows industry best practices, ensuring maintainable, testable, and future-proof applications.",
    icon: CodeBracketIcon,
  },
  {
    title: "Growth-Oriented Design",
    description:
      "Whether it's marketing, engagement, or scalability — our products are crafted with your growth in mind.",
    icon: ChartBarIcon,
  },
  {
    title: "Dedicated Support",
    description:
      "We’re with you every step of the way — offering post-launch support, updates, and quick turnaround on requests.",
    icon: LifebuoyIcon,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We listen, understand your vision, and tailor solutions that align perfectly with your brand and business goals.",
    icon: UserGroupIcon,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-14 text-gray-900 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-8"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-5">
                <Icon className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
