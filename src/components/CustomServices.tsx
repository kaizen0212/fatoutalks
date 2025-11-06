import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, Users } from "lucide-react";

const CustomServices = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Prestations sur devis
            </h2>
            <p className="text-2xl font-semibold text-primary mb-4">
              "Voix en action"
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Parce que chaque événement, chaque public et chaque projet est unique,
              je propose des accompagnements sur-mesure autour de la parole et de la scène.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Conférencière & Modératrice */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Conférencière & Modératrice événementielle</CardTitle>
                <CardDescription className="text-lg">
                  Intervenir, animer, transmettre avec écoute, présence et énergie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-foreground font-semibold">
                    Je mets ma voix et mon expérience au service de vos événements :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Conférences inspirantes autour de la prise de parole, de la confiance et de la présence
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Animation ou modération de tables rondes, panels ou rencontres professionnelles
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Interventions sur mesure selon votre thématique et votre public
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Formations et ateliers collectifs */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Formations et ateliers collectifs</CardTitle>
                <CardDescription className="text-lg">
                  Des expériences collectives vivantes et participatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Des formats conçus pour les entreprises, écoles, associations ou institutions,
                    autour de la communication orale, du leadership et de la cohésion d'équipe.
                  </p>
                  <p className="text-foreground font-semibold">
                    Chaque projet fait l'objet d'un devis personnalisé, après un échange pour définir :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Vos objectifs (impact, cohésion, expression, visibilité…)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Le format souhaité (atelier, masterclass, programme, immersion)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-muted-foreground">
                        Les besoins spécifiques de votre public
                      </span>
                    </li>
                  </ul>
                  <p className="text-foreground italic mt-4">
                    Des expériences collectives vivantes et participatives, qui réconcilient parole, confiance et authenticité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open('https://calendly.com/infomasterclass-op/30min', '_blank')}
            >
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomServices;
