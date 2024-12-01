"use client";

import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section id="features" className="pb-10 lg:pb-20 xl:pb-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "About Us",
              subtitle: "Company based in Riyadh, Saudi Arabia. Est in 2024.",
              description: ``,
            }}
          />
        </div>
      </section>
      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-md leading-7 font-light text-black dark:text-white xl:text-md">
              <span className="font-bold text-lg">Sur AlTuriaq</span> is a leading pharmaceutical wholesaler, providing <span className="font-bold">high-quality, affordable medication</span> to government hospitals. Our mission is to ensure the <span className="font-bold">timely and reliable supply of essential medicines</span>  and <span className="font-bold">dedicated patient care. We are committed to exceeding expectations and building strong, long-lasting relationships</span> with our clients.


              </h2>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                <a href="/about" className="group">
  <span className="duration-300 group-hover:pr-2">
    Know More
  </span>
</a>


                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[700/526.5] md:block md:w-1/2"
            >
<Image
  src="/images/about/pexels-pavel-danilyuk-8442447.jpg"
  alt="About"
  className="dark:hidden rounded-3xl"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
<Image
  src="/images/about/pexels-pavel-danilyuk-8442447.jpg"
  alt="About"
  className="hidden dark:block rounded-3xl"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
