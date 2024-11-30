"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* ===== About Us Section Start ===== */}
      <section id="about" className="px-4 md:px-8 2xl:px-0 py-30">
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
                About Us
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Welcome to our company! We are committed to providing innovative
                solutions and exceptional services to our customers. Our team is
                dedicated to making a positive impact through creativity,
                collaboration, and integrity.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Headquartered in Riyadh, Saudi Arabia, our company was founded in 2024 with a mission to enhance healthcare solutions across the region. We specialize in sourcing high-quality medicines from leading global manufacturers and supplying them to government healthcare institutions within Saudi Arabia. Our commitment to excellence ensures that the products we provide adhere to the most stringent international quality standards, guaranteeing safety and efficacy for patients.
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
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
              {/* Image of MD */}
              <div className="flex flex-col items-center">
                <Image
                  src="/images/about/ai-generated-8563151_1280.png" // Path to the MD's photo
                  alt="Managing Director"
                  className="rounded-full shadow-lg"
                  width={200} // Adjust size as needed
                  height={200} // Adjust size as needed
                  priority
                />
                {/* Information about MD */}
                <h2 className="mt-6 text-2xl font-semibold text-black dark:text-white xl:text-3xl">
                  Dr. ABC XYZ
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Dr. ABC, our esteemed Managing Director, is a visionary leader with over 20 years of experience in the healthcare sector. His commitment to excellence and innovation has propelled our company to new heights. Under his guidance, we continue to deliver impactful solutions and enhance patient care across the region.
                </p>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-3/5 lg:w-[100%]"
            >
              <Image
                src="/images/about/pexels-edward-jenner-4031321.jpg"
                alt="Our Team"
                className="rounded-lg shadow-lg"
                width={1000}
                height={1200}
                priority
              />
            </motion.div>


          </div>
        </div>
      </section>
      {/* ===== About Us Section End ===== */}
    </>
  );
};

export default AboutUs;
