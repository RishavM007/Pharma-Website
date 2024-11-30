"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const PartnershipPage = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* ===== Partnership Section Start ===== */}
      <section id="partnership" className="px-4 md:px-8 2xl:px-0 py-30">
        <div className="relative mx-auto max-w-c-1390 px-8 pt-12 lg:pt-16 xl:pt-20">
          {/* Background Gradient */}
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

          {/* Decorative Background Images */}
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Light Dotted Shape"
              className="dark:hidden"
              fill
              priority
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dark Dotted Shape"
              className="hidden dark:block"
              fill
              priority
            />
          </div>

          {/* Main Content */}
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:justify-between xl:gap-20">
            {/* Text Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
              <h2 className="mb-6 text-3xl font-semibold text-black dark:text-white xl:text-4xl">
                Our Partnership
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                At the core of our business lies a commitment to building strong, lasting partnerships with industry leaders, stakeholders, and communities. We aim to work collaboratively to achieve mutual goals and create innovative solutions.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Based in Riyadh, Saudi Arabia, our partnerships span across various industries, from technology to healthcare, ensuring that we provide cutting-edge services while fostering growth and social impact.
              </p>
            </motion.div>

            {/* Key Partnership Areas */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                Key Partnership Areas
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700 dark:text-gray-300">
                <li>Technology Innovation</li>
                <li>Strategic Alliances</li>
                <li>Global Collaboration</li>
                <li>Social Responsibility</li>
              </ul>
            </motion.div>
          </div>

          {/* Partnering for the Future */}
          <div className="flex flex-col md:flex-row gap-8 mt-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-1/2"
            >
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                Partnering for Success
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We focus on long-term success through collaborative partnerships, working together to solve complex challenges and deliver sustainable results. Through trust and innovation, we build lasting relationships that drive industry growth.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-1/2"
            >
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                Looking Ahead
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Looking ahead, we envision growing alongside our partners, exploring new opportunities, and paving the way for a future where collaboration leads to innovation and success.
              </p>
            </motion.div>
          </div>

          {/* Support Button */}
          <div className="text-center mt-16">
            <a
              href="/support" // Using anchor link to navigate to support page
              className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Support
            </a>
          </div>
        </div>
      </section>
      {/* ===== Partnership Section End ===== */}
    </>
  );
};

export default PartnershipPage;
