"use client";

import React from "react";
import { motion } from "framer-motion";

const CareerPage = () => {
  return (
    <motion.section
      className="py-20 mt-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Career Section Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          We’re always looking for passionate and talented people to join our team and make a real impact.
        </p>
      </motion.header>

     
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16 px-4 lg:px-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          Career Opportunities
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          At our company, we are driven by innovation and a commitment to excellence. Our team is made up of passionate individuals who are constantly seeking new challenges and making a real impact in their respective fields.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          We offer career opportunities across a wide range of disciplines, from technology to creative design, marketing, and customer service.
        </p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Ready to take the next step in your career? Join us and help shape the future!
        </p>

   
        <motion.a
          href="/support"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect With Us
        </motion.a>
      </motion.div>


      <motion.div
        className="bg-white dark:bg-gray-800 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            We believe that a great company is built by great people. That’s why we focus on fostering a culture that is inclusive, collaborative, and growth-oriented. Here are some of the values that define us:
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We value forward-thinking ideas that drive innovation and progress.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We work together to achieve common goals and celebrate our collective success.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We are committed to continuous learning and personal development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
    </motion.section>
  );
};

export default CareerPage;
