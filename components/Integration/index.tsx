"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const featuresData = [
  {
    id: 1,
    image: "/images/icon/pexels-chokniti-khongchum-1197604-2280571.jpg",
    title: "Technical Collaboration",
    description:
      "Leveraging partnerships with top tech providers to deliver cutting-edge solutions for plant operations.",
  },
  {
    id: 2,
    image: "/images/icon/pexels-chokniti-khongchum-1197604-2280571.jpg",
    title: "Integrated Expertise",
    description:
      "Ensuring seamless technical integration throughout the facility's entire life cycle for optimal performance.",
  },
  {
    id: 3,
    image: "/images/icon/pexels-chokniti-khongchum-1197604-2280571.jpg",
    title: "Sustainable Solutions",
    description:
      "Focusing on eco-friendly and efficient methods to drive sustainable growth and operations.",
  },
];

const Integration = () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Section Title */}
        <SectionHeader
          headerInfo={{
            title: `PROJECT OVERVIEW`,
            subtitle: `Sur Al-Tariaq collaborates with leading tech companies`,
            description: `Total solution is worth more than the parts: Integrated technical expertise during the entire facility life cycle.`,
          }}
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {featuresData.map((feature) => (
          <motion.div
            key={feature.id}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="z-40 rounded-xl border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
          >
            <div className="relative w-full h-60 sm:h-48 md:h-56 lg:h-60 xl:h-72 overflow-hidden rounded-xl">
              <Image
                src={feature.image}
                layout="fill"
                objectFit="cover"
                alt={feature.title}
                className="rounded-xl"
              />
            </div>
            <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Integration;
