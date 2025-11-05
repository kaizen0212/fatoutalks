import { Wind, Mic, Brain, Sparkles } from "lucide-react";

const Approach = () => {
  const approaches = [
    {
      icon: Wind,
      title: "La respiration et l'ancrage",
    },
    {
      icon: Mic,
      title: "La voix et l'articulation",
    },
    {
      icon: Brain,
      title: "La posture mentale",
    },
    {
      icon: Sparkles,
      title: "L'identité oratoire",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commence ta transformation{" "}
              <span className="text-secondary">maintenant !</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-8"></div>
          </div>

          <div className="space-y-8 text-center mb-12">
            <p className="text-xl text-foreground font-semibold">
              Mon approche est sur mesure.
            </p>
            <p className="text-lg text-muted-foreground">
              Je ne t'apprends pas seulement à "parler", je t'aide à devenir un orateur d'exception qui impacte par sa simple présence et son énergie.
            </p>

            <div className="py-8">
              <p className="text-lg text-muted-foreground mb-8">
                Ensemble, nous travaillons sur :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {approaches.map((approach, index) => {
                  const Icon = approach.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-foreground font-medium text-left">
                        {approach.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
