"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData"; // Import the separate menuData file.

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language

  const pathUrl = usePathname();

  // Sticky menu handler
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu ? "bg-white !py-4 shadow transition duration-100 dark:bg-black" : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Sur <span className="text-blue-500">Al-Tariaq</span>
              </h2>
            </div>
          </a>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            {/* Hamburger SVG */}
          </button>
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData[language].map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  <Link
                    href={`${menuItem.path}`}
                    className={
                      pathUrl === menuItem.path
                        ? "text-primary hover:text-primary"
                        : "hover:text-primary"
                    }
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language and Theme Toggles */}
          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <button
              className="rounded border px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
              onClick={toggleLanguage}
            >
              {language === "en" ? "العربية" : "English"}
            </button>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
