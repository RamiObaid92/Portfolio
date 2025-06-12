import Photo from "@/assets/images/20250605_174037.jpg";
import Cv from "@/assets/files/rami-obaid-CV.pdf";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 opacity-90"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <span className="text-yellow-300">Rami Obaid</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Full-Stack Developer creating elegant solutions to complex
                problems
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={Cv}
                  className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Rami_Obaid_Resume.pdf"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all transform hover:scale-105 shadow-lg font-medium"
                >
                  Let's Talk
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
              <div className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-lg">
                <span className="text-blue-600 font-bold text-xl">React</span>
              </div>
              <div className="absolute bottom-10 left-0 bg-white p-2 rounded-full shadow-lg">
                <span className="text-green-600 font-bold text-xl">C#</span>
              </div>
              <div className="absolute top-1/3 -left-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-bold text-xl">
                  ASP.NET
                </span>
              </div>
              <div className="absolute bottom-0 right-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-yellow-600 font-bold text-xl">
                  JavaScript
                </span>
              </div>
              <div className="absolute top-1/2 -right-10 bg-white p-2 rounded-full shadow-lg">
                <span className="text-blue-500 font-bold text-xl">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
