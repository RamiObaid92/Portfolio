import { useState, useEffect } from "react";
import clsx from "clsx";
import Photo from "@/assets/images/20250605_174037.jpg";

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

interface NavLinkListProps {
  links: NavLink[];
  className: string;
  onLinkClick: () => void;
}

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
};

export default Navbar;
