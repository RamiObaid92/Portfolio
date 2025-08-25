import Photo from "@/assets/images/20250605_174037.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-90"></div>
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {t("hero.greeting")}
                <span className="text-yellow-300">Rami Obaid</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {t("hero.title")}
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="/files/resume-rami-obaid-en.pdf"
                  className="inline-block bg-yellow-400 text-gray-900 px-3.5 py-3 justify-center rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="cv-rami-obaid-en.pdf"
                >
                  {t("hero.resume_button_en")}
                </a>
                <a
                  href="/files/resume-rami-obaid-sv.pdf"
                  className="inline-block bg-yellow-400 text-gray-900 px-3.5 py-3 justify-center rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="cv-rami-obaid-sv.pdf"
                >
                  {t("hero.resume_button_sv")}
                </a>
                <a
                  href="#contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-3.5 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all transform hover:scale-105 shadow-lg font-medium"
                  onClick={(e) => handleScroll(e, "#contact")}
                >
                  {t("hero.contact_button")}
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              {/* Profile image with circular border */}
              <div className="relative mx-auto w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={Photo}
                  alt="Rami Obaid - Full Stack Developer"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Floating tech icons */}
              <div className="animate-float absolute top-1/9 left-5 bg-white p-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-bold text-xl">.NET</span>
              </div>
              <div className="animate-float absolute top-1/9 right-5 bg-white p-2 rounded-full shadow-lg">
                <span className="text-sky-500 font-bold text-xl">React</span>
              </div>
              <div className="animate-float absolute top-1/2 -left-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-bold text-xl">
                  ASP.NET
                </span>
              </div>
              <div className="animate-float absolute top-1/2 -right-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-blue-600 font-bold text-xl">
                  TypeScript
                </span>
              </div>
              <div className="animate-float absolute bottom-0 left-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-green-600 font-bold text-xl">C#</span>
              </div>
              <div className="animate-float absolute bottom-0 right-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-red-600 font-bold text-xl">Angular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="waves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
