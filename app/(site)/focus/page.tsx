"use client";

import React from "react";
import Image from "next/image";

const VerticalCards = () => {
  const cards = [
    {
      id: 1,
      logoLight: "/images/icon/braindark.png", // Light Mode Logo
      logoDark: "/images/icon/brain.png", // Dark Mode Logo
      title: "Nervous System",
      subtitle: "The intricate web controlling every thought, movement, and sensation",
    },
    {
      id: 2,
      logoLight: "/images/icon/heartdark.png",
      logoDark: "/images/icon/heart.png",
      title: "Cardiovascular System",
      subtitle: "A network that circulates oxygen, nutrients, and vitality.",
    },
    {
      id: 3,
      logoLight: "/images/icon/metabolismdark.png",
      logoDark: "/images/icon/metabolism.png",
      title: "Ailmentary Tract and Metabolism",
      subtitle: "The chemical processes that power our energy and sustain life.",
    },
    {
      id: 4,
      logoLight: "/images/icon/cell.png",
      logoDark: "/images/icon/cell-white.png",
      title: "Blood and Blood-Forming Organs",
      subtitle: "How blood nourishes the body and sustains life.",
    },
    {
      id: 5,
      logoLight: "/images/icon/lungs.png",
      logoDark: "/images/icon/lungs -white.png",
      title: "Musculoskeletal System",
      subtitle: "Bones and muscles working in harmony for movement and support.",
    },
    {
      id: 6,
      logoLight: "/images/icon/anatomy.png",
      logoDark: "/images/icon/anatomy-white.png",
      title: "Title 6",
      subtitle: "This is a short subtitle for card 6.",
    },
    {
      id: 7,
      logoLight: "/images/icon/kidney.png",
      logoDark: "/images/icon/kidney-white.png",
      title: "Genito-Urinary System",
      subtitle: "Maintaining balance and eliminating waste for optimal health.",
    },
    {
      id: 8,
      logoLight: "/images/icon/virus.png",
      logoDark: "/images/icon/virus-white.png",
      title: "Systemic Antivirals",
      subtitle: "Medications that protect and heal from viral threats.",
    },
    {
      id: 9,
      logoLight: "/images/icon/syringe.png",
      logoDark: "/images/icon/syringe-white.png",
      title: "Antineoplastic Agents",
      subtitle: "Powerful tools in the battle against uncontrolled cell growth.",
    },
    {
      id: 10,
      logoLight: "/images/icon/hairdark.png",
      logoDark: "/images/icon/hair-white.png",
      title: "Title 10",
      subtitle: "This is a short subtitle for card 10.",
    },
  ];

  return (
    <section className="py-20 mt-10">

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
            Our Focus
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore the range of solutions we offer to enhance your experience.
        </p>
      </header>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 lg:px-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mb-4">
              <Image
                src={card.logoLight}
                alt={`Logo ${card.id}`}
                width={64}
                height={64}
                className="object-cover dark:hidden"
              />
              <Image
                src={card.logoDark}
                alt={`Logo ${card.id}`}
                width={64}
                height={64}
                className="object-cover hidden dark:block"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalCards;
