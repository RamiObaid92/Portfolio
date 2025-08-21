import { useEffect, type FC } from "react";
import {
  Routes,
  Route,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";

const PortfolioLayout: FC = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    // Runs when the animation finishes
    const handleAnimationEnd = (event: AnimationEvent) => {
      const target = event.target as HTMLElement;
      target.classList.remove("animate-fade-in-up");
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;

          targetElement.classList.remove("section-hidden");
          targetElement.classList.add("animate-fade-in-up");
          targetElement.addEventListener("animationend", handleAnimationEnd, {
            once: true,
          });
          observer.unobserve(targetElement);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = document.querySelectorAll<HTMLElement>("section");

    sections.forEach((section) => {
      section.classList.add("section-hidden");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
        section.removeEventListener("animationend", handleAnimationEnd);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
};

const LanguageHandler: FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return <PortfolioLayout />;
};

const App: FC = () => {
  const { i18n } = useTranslation();
  return (
    <Routes>
      <Route path="/:lang" element={<LanguageHandler />} />
      <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
    </Routes>
  );
};

export default App;
