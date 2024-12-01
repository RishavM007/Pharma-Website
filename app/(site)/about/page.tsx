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
                solutions and exceptional services to our customers.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-bold text-xl">Sur AlTuriaq </span>was founded in 2024 with a vision to become a trusted partner for government hospitals. Our journey began with a simple yet ambitious goal: to provide <span className="font-bold text-xl">reliable access to essential medication. Over the years, we have grown into a leading pharmaceutical wholesaler, driven by our unwavering commitment to **quality, patient care, and ethical business practices</span> .

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
              
              <div className="flex flex-col items-center">
                
                
                <h2 className="mt-6 text-2xl font-semibold text-black dark:text-white xl:text-3xl">
                  Our Mission 
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                 To be the preferred pharmaceutical wholesaler for government hospitals, delivering superior products and services
                </p>
                <h2 className="mt-6 text-2xl font-semibold text-black dark:text-white xl:text-3xl">
                  Our Vision
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                 To enhance healthcare outcomes by ensuring the availability and affordability of essential medications.
                </p>
              </div>
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
              
              <div className="flex flex-col items-center">
                <h1 className="mt-6 mb-10 text-3xl font-semibold text-black dark:text-white xl:text-4xl">Our Values</h1>

                <h2 className="mt-6  text-2xl font-light text-black dark:text-white xl:text-3xl">
                Integrity 
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                We conduct our business with *honesty, transparency, and ethical principles</p>
                <h2 className="mt-6 text-2xl font-light text-black dark:text-white xl:text-3xl">
                Quality
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                We are committed to delivering *high-quality products and services</p>
                <h2 className="mt-6 text-2xl font-light text-black dark:text-white xl:text-3xl">
                Customer Focus
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                We prioritize the needs of our clients* and strive to *exceed their expectations.
                </p>
                <h2 className="mt-6 text-2xl font-light text-black dark:text-white xl:text-3xl">
                Reliability
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                We ensure *timely and reliable deliveries</p>
              </div>
            </motion.div>



          </div>
        </div>
      </section>
      {/* ===== About Us Section End ===== */}
    </>
  );
};

export default AboutUs;
