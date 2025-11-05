const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Fatou</h3>
          <p className="text-primary-foreground/80">Coach en prise de parole et expression scénique</p>
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Fatou Coach. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
