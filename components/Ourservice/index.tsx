"use client";
import React from "react";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";

const servicesData = [
  {
    title: "Wholesale Importation",
    desc1: "We source a wide range of pharmaceutical products from trusted global suppliers, ensuring a diverse product portfolio.",
    desc2: "",
  },
  {
    title: "Wholesale Distribution",
    desc1: "",
    desc2: "We efficiently distribute large quantities of medication directly to government hospitals, minimizing supply chain disruptions and maximizing product availability.",
  },
  {
    title: "Regulatory Compliance",
    desc1: "",
    desc2: "We strictly adhere to regulatory standards, including FDA and local regulations, to ensure the safety, efficacy, and quality of our products.",
  },
];

const ServiceCard = ({ service }) => {
  const { title, desc1, desc2 } = service;

  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300">{desc1}</p>
      <p className="text-gray-700 dark:text-gray-300">{desc2}</p>
    </div>
  );
};

const OurServices = () => {
  return (
    <section id="our-services" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Header */}
        <SectionHeader
          headerInfo={{
            title: "Our Services",
            subtitle: "What We Offer",
            description: ``,
          }}
        />

        {/* Service Cards */}
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {servicesData.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>        
      </div>
    </section>
  );
};

export default OurServices;
