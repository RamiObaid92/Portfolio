import Photo from "@/assets/images/20250710_164529.jpg";

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-15">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img src={Photo} alt="Rami Obaid" className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Currently I am a student studying Software Development at
                Nackademin specializing in both Backend and Frontend
                Development. It started off as an interest and quickly became a
                big passion where I always strive to improve my knowledge and
                skills.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Currently I am looking for an internship position to apply my
                skills in a real-world setting.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                My Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With expertise in modern knowledge in technologies and a
                commitment to clean, efficient code, I strive to build
                applications that do not only function well but also provide an
                excellent user experience, as well as maintanable and readable
                code as I believe that is the key to long-term success in
                working with a team.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                Core Values
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Writing clean, maintainable, readable and efficient code
                </li>
                <li>Designing user-friendly and accessible interfaces</li>
                <li>
                  Solving problems with innovative and practical solutions
                </li>
                <li>Embracing continuous learning and growth</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                Hobbies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, for
                future projects. I'm also an avid gamer ever since I was a kid,
                and I love playing a variety of games.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Outside of gaming, I enjoy the outdoors the most as it makes me
                feel refreshed and energized, especially going on walks and
                exploring what nature has to offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
