import Photo from "@/assets/images/20250605_174037.jpg";

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            About Me
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Passionate software developer with expertise in full-stack development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img src={Photo} alt="Rami Obaid" className="object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-blue-500"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-blue-500"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Full-Stack Developer with a strong foundation
                in both front-end and back-end technologies. My journey in
                software development has been driven by a desire to create
                impactful solutions that solve real-world problems.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                My Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With expertise in modern web technologies and a commitment to
                clean, efficient code, I strive to build applications that are
                not only functional but also provide an excellent user
                experience. I believe in continuous learning and staying
                up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                Core Values
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Writing clean, maintainable, and efficient code</li>
                <li>Creating intuitive and accessible user interfaces</li>
                <li>Problem-solving with creative and practical solutions</li>
                <li>Continuous learning and professional growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
