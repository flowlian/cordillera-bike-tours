import { Shield, Users, Heart, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import sustainabilityIcon from "@/assets/sustainability-icon.png";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("about.safety"),
      description: t("about.safetyDesc"),
    },
    {
      icon: "sustainability",
      title: t("about.sustainability"),
      description: t("about.sustainabilityDesc"),
    },
    {
      icon: Heart,
      title: t("about.passion"),
      description: t("about.passionDesc"),
    },
    {
      icon: Award,
      title: t("about.experience"),
      description: t("about.experienceDesc"),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-foreground/80">
              <p>{t("about.text1")}</p>
              <p>{t("about.text2")}</p>
              <p>{t("about.text3")}</p>
              <p>{t("about.text4")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = typeof feature.icon === 'string' ? null : feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {Icon ? (
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-3 sm:mb-4" />
                  ) : (
                    <img 
                      src={sustainabilityIcon} 
                      alt="Sustainability" 
                      className="h-8 w-8 sm:h-10 sm:w-10 object-contain mb-3 sm:mb-4"
                    />
                  )}
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
