import React, { useState } from 'react';
import BusinessCard from '../components/BusinessCard';
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const socialLinks = [
  { href: "https://twitter.com/chukwuka", label: "Twitter", icon: <FaTwitter /> },
  { href: "https://www.linkedin.com/in/chukwuka-erondu-4344232bb", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://github.com/codehub1001", label: "GitHub", icon: <FaGithub /> },
  { href: "https://wa.me/2348112780944", label: "WhatsApp", icon: <FaWhatsapp /> },
  { href: "https://instagram.com/oriontechhub", label: "Instagram", icon: <FaInstagram /> },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    toast.promise(
      emailjs.send('service_de2imz4', 'template_rzm210p', formData, '9VjuhkqsRy37AxVSR'),
      {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Something went wrong. Please try again.',
      }
    );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-16 gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      {/* Left: Card + Socials */}
      <motion.div
        className="flex-shrink-0 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <BusinessCard />
        <div className="flex justify-center mt-4 space-x-4 text-lg text-red-600">
          {socialLinks.map(({ href, label, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              className="transition-colors hover:text-red-800"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right: Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Let’s Talk</h2>
          <p className="text-gray-500 text-sm mt-1">Got a project in mind or just want to say hi? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Message</label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
          ></textarea>
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-red-600 rounded-xl hover:bg-red-700 transition duration-300 font-medium"
        >
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
