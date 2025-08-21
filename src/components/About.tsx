import Photo from "@/assets/images/20250710_164529.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-15">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {t("about.title")}
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
                {t("about.journey.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("about.journey.description")}
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                {t("about.journey.descriptionTwo")}
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                {t("about.journey.descriptionThree")}
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                {t("about.approach.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("about.approach.description")}
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                {t("about.coreValues.title")}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t("about.coreValues.values.0")}</li>
                <li>{t("about.coreValues.values.1")}</li>
                <li>{t("about.coreValues.values.2")}</li>
                <li>{t("about.coreValues.values.3")}</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {t("about.hobbies.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("about.hobbies.description")}
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                {t("about.hobbies.descriptionTwo")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
