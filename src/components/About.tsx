import professionalImage from "@/assets/fatou-professional.jpg";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <img
              src={professionalImage}
              alt="Fatou - Coach professionnelle"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Je suis <span className="text-secondary">Fatou</span>, coach en prise de parole
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Issue d'une formation professionnelle en cinéma et présidente d'une association culturelle, j'ai fondé Osez Prendre la Parole pour accompagner celles et ceux qui souhaitent gagner en aisance et en impact à l'oral qu'ils soient entrepreneurs, étudiants ou porteurs de projet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dans une société marquée par l'apparence et le jugement, prendre la parole en public peut devenir une véritable source d'angoisse. Beaucoup redoutent de défendre leurs idées, leurs projets, ou simplement de s'exprimer face à un auditoire.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              C'est dans ce contexte que j'interviens : pour transmettre les clés de l'art oratoire, et révéler la puissance des mots à travers des outils concrets issus de l'expression scénique et de l'univers du spectacle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
              Car la parole n'est pas un don. Elle s'apprend, elle se travaille, elle se muscle. Et surtout : elle se libère et elle existe !
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              À travers Osez Prendre la Parole, je propose des accompagnements adaptés à différents profils, pour aider chacun à faire entendre sa voix avec confiance, justesse… et impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
