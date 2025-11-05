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
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ma mission : t'aider à parler avec confiance, émotion et authenticité pour que chaque mot laisse une empreinte durable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              J'accompagne les entrepreneures, leaders et créateurs qui veulent affirmer leur voix, incarner leur message et se faire entendre vraiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
