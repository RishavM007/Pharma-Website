"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-1/2 sm:px-6 md:px-8 lg:px-8 xl:px-10">
              <h1 className="mb-5 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-4xl lg:text-7xl xl:text-7xl">
                Transforming
              </h1>
              <span className="relative block text-xl font-medium text-black dark:text-white sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl before:hidden before:absolute sm:before:block before:bottom-1 before:left-0 before:-z-1 before:h-1 before:w-1/2 before:bg-blue-400">
                Healthcare with{" "} Pharmaceutical Excellence
              </span>

              <button
                aria-label="get started button"
                className="mt-8 flex items-center justify-center rounded-full bg-black px-6 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-800 dark:bg-btndark dark:hover:bg-gray-900 sm:mt-10 sm:px-7 sm:py-3 md:px-8 md:py-4"
              >
                Contact Us
              </button>
            </div>


            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full mr-52">
                  <Image
                    className="shadow-solid-l dark:hidden rounded-full"
                    src="/images/hero/pexels-pixabay-356040.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-full"
                    src="/images/hero/pexels-pixabay-356040.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
