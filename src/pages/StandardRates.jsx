import React from "react";
import { motion } from "framer-motion";

const whatsappNumber = "2348112780944";

const pricingPlans = [
  {
    name: "Basic",
    price: "₦150,000",
    description: "Ideal for small projects and startups",
    features: [
      "Up to 5 pages",
      "Basic SEO optimization",
      "Responsive design",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₦250,000",
    description: "Perfect for growing businesses",
    features: [
      "Up to 15 pages",
      "Advanced SEO & Analytics",
      "Custom UI/UX Design",
      "Priority email & chat support",
      "CMS Integration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "For large scale projects & dedicated support",
    features: [
      "Unlimited pages",
      "Full SEO & Marketing support",
      "Dedicated Account Manager",
      "24/7 phone & chat support",
      "Custom integrations & APIs",
    ],
  },
];

const websiteTypes = [
  {
    type: "Blog Website",
    price: "₦150,000 - ₦250,000",
    description: "Simple, content-focused blogs with clean layouts.",
    features: [
      "Custom blog design",
      "Easy content management",
      "Social media integration",
      "Mobile friendly",
      "Basic SEO",
    ],
  },
  {
    type: "E-commerce Website",
    price: "₦450,000 - ₦700,000",
    description: "Fully functional online store with payment integration.",
    features: [
      "Product catalog & categories",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order management",
      "Customer accounts",
      "Security features",
    ],
  },
  {
    type: "Corporate Website",
    price: "₦200,000 - ₦300,000",
    description: "Professional sites for businesses showcasing services.",
    features: [
      "Custom design and branding",
      "Service showcase",
      "Contact forms",
      "Portfolio or case studies",
      "SEO & Analytics",
      "CMS integration",
    ],
  },
  {
    type: "Website Management",
    price: "₦50,000-₦100,000/month",
    description: "Ongoing support, content updates, and maintenance.",
    features: [
      "Content & image updates",
      "Monthly backups",
      "Security monitoring",
      "Bug fixes & performance tuning",
      "Priority support",
    ],
  },
  {
    type: "Graphic Design",
    price: "₦25,000 - ₦150,000",
    description: "Stunning visuals for digital & print branding.",
    features: [
      "Logo design",
      "Social media graphics",
      "Brand identity kit",
      "Flyers & banners",
      "Business cards",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StandardRates = () => {
  const handleWhatsAppClick = (packageName) => {
    const message = encodeURIComponent(
      `Hello, I am interested in the ${packageName} plan. Please provide more details.`
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Standard Rates & Packages
          </h2>
          <p className="text-gray-600 text-lg">
            Transparent pricing to help you choose the right plan for your project.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid gap-10 md:grid-cols-3 mb-16">
          {pricingPlans.map(({ name, price, description, features }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-red-600 font-bold text-3xl mb-4">{price}</p>
                <p className="text-gray-600 mb-6">{description}</p>

                <ul className="space-y-3 mb-8 text-gray-700">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppClick(name)}
                type="button"
                className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Website Types */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            Rates by Website Type
          </h3>
          <p className="text-gray-600 text-lg">
            Choose a package based on your website needs.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {websiteTypes.map(({ type, price, description, features }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{type}</h3>
                <p className="text-red-600 font-bold text-2xl mb-4">{price}</p>
                <p className="text-gray-600 mb-6">{description}</p>

                <ul className="space-y-3 mb-8 text-gray-700">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppClick(type)}
                type="button"
                className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardRates;
