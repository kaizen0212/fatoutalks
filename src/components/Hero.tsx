import coachImage from "@/assets/fatou-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Je t'apprends à transformer ta présence en{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                puissance
              </span>
              , et ta parole en{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                impact
              </span>
              .
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
          </div>

          <div className="relative animate-slide-in">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={coachImage}
              alt="Fatou - Coach en prise de parole"
              className="relative rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
