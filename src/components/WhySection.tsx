import { Check } from "lucide-react";

const WhySection = () => {
  const benefits = [
    "Tu es connecté à ton audience",
    "Ton business gagne en crédibilité",
    "Tes opportunités se multiplient",
    "Et surtout, tu prends pleinement ta place !",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pourquoi la prise de parole change tout ?
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-2xl text-foreground font-semibold">
              La prise de parole, ce n'est pas qu'une compétence.
            </p>
            <p className="text-xl text-muted-foreground">
              C'est un levier de transformation personnelle et professionnelle.
            </p>

            <div className="py-8">
              <p className="text-lg text-muted-foreground mb-8">
                Quand tu apprends à parler avec présence :
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground text-left">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-2xl text-primary font-bold pt-4">
              Tu ne gagnes pas en visibilité, tu gagnes en impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
