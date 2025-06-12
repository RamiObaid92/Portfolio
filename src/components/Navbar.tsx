import { useState, useEffect } from "react";
import type { FC } from "react";
import clsx from "clsx";
import Photo from "@/assets/images/20250605_174037.jpg";
import Cv from "@/assets/files/rami-obaid-CV.pdf";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

interface NavLinksListProps {
  links: NavLink[];
  className: string;
  onLinkClick?: () => void;
}

const NavLinksList: FC<NavLinksListProps> = ({
  links,
  className,
  onLinkClick,
}) => (
  <>
    {links.map((link) => (
      <a
        key={link.title}
        href={link.href}
        className={className}
        onClick={onLinkClick}
      >
        {link.title}
      </a>
    ))}
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = clsx(
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    {
      "bg-white/95 shadow-lg backdrop-blur-md py-2": scrolled,
      "bg-transparent py-4": !scrolled,
    },
  );

  const desktopNavClasses = clsx("text-sm font-medium transition-colors", {
    "text-gray-700 hover:text-gray-600": scrolled,
    "text-white hover:text-blue-300": !scrolled,
  });

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src={Photo}
              alt="Rami Obaid"
              className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
            />
            <span
              className={clsx("text-xl font-bold", {
                "text-gray-900": scrolled,
                "text-white": !scrolled,
              })}
            >
              Rami Obaid
            </span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLinksList links={navLinks} className={desktopNavClasses} />
              <a
                href={Cv}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className={clsx("md:hidden", {
              "text-gray-900": scrolled,
              "text-white": !scrolled,
            })}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinksList
              links={navLinks}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onLinkClick={() => setIsOpen(false)}
            />
            <a
              href={Cv}
              className="block px-3 py-2 text-blue-600 font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
