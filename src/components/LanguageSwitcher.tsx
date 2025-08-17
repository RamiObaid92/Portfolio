import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { GB, SE } from "country-flag-icons/react/3x2";
import clsx from "clsx";

const LanguageSwitcher = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    pathSegments[0] = lng;
    window.location.pathname = `/${pathSegments.join("/")}`;
  };

  const buttonClasses = clsx(
    "font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center transition-colors",
    {
      "text-gray-700 hover:bg-gray-100": scrolled,
      "text-white hover:bg-white/20": !scrolled,
    },
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
        type="button"
      >
        {i18n.language === "sv" ? (
          <SE title="Svenska" className="w-5 h-5" />
        ) : (
          <GB title="English" className="w-5 h-5" />
        )}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-36">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
              >
                <GB title="English" className="w-5 h-5 rounded-sm" />
                <span>English</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("sv")}
                className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
              >
                <SE title="Svenska" className="w-5 h-5 rounded-sm" />
                <span>Svenska</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
