const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Je suis <span className="text-secondary">Fatou</span>, coach en prise de parole
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ma mission : t'aider à parler avec confiance, émotion et authenticité pour que chaque mot laisse une empreinte durable.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            J'accompagne les entrepreneures, leaders et créateurs qui veulent affirmer leur voix, incarner leur message et se faire entendre vraiment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
