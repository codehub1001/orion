import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const socialIconHover = {
  scale: 1.15,
  color: "#ef4444",
  transition: { duration: 0.3 },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-200 py-16 mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
        
        {/* Branding */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-extrabold text-white mb-4 tracking-wide">
            Orion Tech-Hub
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We build powerful, scalable, and elegant digital products that move businesses forward.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-6">
            {[
              {
                icon: FacebookIcon,
                href: "https://facebook.com/yourusername",
                label: "Facebook",
              },
              {
                icon: FaWhatsapp,
                href: "https://wa.me/2348112780944",
                label: "Twitter",
              },
              {
                icon: LinkedinIcon,
                href: "https://linkedin.com/in/chukwuka-erondu-4344232bb",
                label: "LinkedIn",
              },
              {
                icon: InstagramIcon,
                href: "https://instagram.com/oriontechhub",
                label: "Instagram",
              },
              {
                icon: GithubIcon,
                href: "https://github.com/codehub1001",
                label: "GitHub",
              },
            ].map(({ icon: Icon, href, label }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-red-500 transition"
                whileHover={socialIconHover}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#service", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-red-500 transition-all duration-200 relative inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
            Services
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Website Management</li>
            <li>Consulting</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPinIcon className="h-5 w-5 text-red-500" />
              Olayeni, Ikeja, Lagos
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <PhoneIcon className="h-5 w-5 text-red-500" />
              +234 811 278 0944
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start">
              <EnvelopeIcon className="h-5 w-5 text-red-500" />
              contact@oriontechhub.com
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500 px-4"
        variants={itemVariants}
      >
        &copy; {new Date().getFullYear()} Orion Tech-Hub. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
