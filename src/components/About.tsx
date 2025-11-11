import { Shield, Users, Heart, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t("about.safety"),
      description: t("about.safetyDesc"),
    },
    {
      icon: Users,
      title: t("about.smallGroups"),
      description: t("about.smallGroupsDesc"),
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>{t("about.text1")}</p>
              <p>{t("about.text2")}</p>
              <p>{t("about.text3")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
