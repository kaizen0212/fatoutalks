import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Mic2 } from "lucide-react";

const Programs = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Prêt à passer du silence à la scène ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvre mes programmes exclusifs pour incarner ton message et captiver ton audience.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programme des orateurs */}
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Programme des orateurs</CardTitle>
                <CardDescription className="text-lg">
                  Coaching Individuel Premium et personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">499€</span>
                    <span className="text-muted-foreground">TTC</span>
                  </div>
                  <p className="text-muted-foreground">1 mois intensif</p>
                  <p className="text-foreground">
                    Deviens un orateur d'exception capable de captiver investisseurs, partenaires et clients.
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4" size="lg">
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Programme des orateurs sur 1 mois</DialogTitle>
                        <DialogDescription className="text-lg">
                          499€ TTC - Coaching Individuel Premium et personnalisé
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-4">
                        <div>
                          <h3 className="font-bold text-lg mb-2">Objectif du programme :</h3>
                          <p className="text-muted-foreground">
                            T'aider à devenir un orateur d'exception, capable de captiver des investisseurs, 
                            partenaires ou des clients.
                          </p>
                          <p className="text-foreground font-semibold mt-2">
                            Clarté et charisme feront parti de toi.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            Ce parcours est conçu pour que tu prennes pleinement possession de ta voix, 
                            de ton message et de ton espace.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-bold text-lg">Programme détaillé :</h3>
                          
                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">COURS 1 : Bilan & bases de la posture oratoire</h4>
                            <p className="text-sm text-muted-foreground">Durée : 1h30</p>
                          </div>

                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">COURS 2 : Gérer le stress, incarner son discours</h4>
                            <p className="text-sm text-muted-foreground">Durée : 1h30</p>
                          </div>

                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">COURS 3 : S'exercer face au réel</h4>
                            <p className="text-sm text-muted-foreground">Durée : 1h30</p>
                          </div>

                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">COURS 4 : Affirmation & leadership oratoire</h4>
                            <p className="text-sm text-muted-foreground">Durée : 1h30</p>
                          </div>
                        </div>

                        <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                          <p className="text-sm">
                            Chaque cours peut être réalisé en physique ou à distance.
                          </p>
                          <p className="text-sm mt-2">
                            Entre chaque cours, tu auras des exercices et des challenges pour te mettre en situation dès que possible.
                          </p>
                        </div>

                        <Button className="w-full" size="lg">
                          Réserve ton rdv téléphonique
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            {/* Programme des pitchers */}
            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Programme des pitchers</CardTitle>
                <CardDescription className="text-lg">
                  Formation intensive sur 15 jours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">299€</span>
                    <span className="text-muted-foreground">TTC</span>
                  </div>
                  <p className="text-muted-foreground">15 jours intensif</p>
                  <p className="text-foreground">
                    Structure, incarne et livre un pitch percutant qui marque les esprits.
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4" size="lg">
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Programme des pitchers - 15 jours intensif</DialogTitle>
                        <DialogDescription className="text-lg">
                          299€ TTC
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-4">
                        <div>
                          <h3 className="font-bold text-lg mb-2">Objectif du programme :</h3>
                          <p className="text-muted-foreground">
                            Aider les participant·es à structurer, incarner et livrer un pitch percutant, 
                            que ce soit pour un projet, une présentation ou une prise de parole professionnelle.
                          </p>
                          <p className="text-foreground font-semibold mt-2">
                            En 15 jours, tu gagnes en clarté, en impact et en présence.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-bold text-lg">Programme détaillé :</h3>
                          
                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">Cours 1 – Trouver sa voix et poser son pitch</h4>
                            <p className="text-sm text-muted-foreground">
                              Objectif : poser les fondations du pitch et incarner une parole claire, vivante et cohérente.
                            </p>
                          </div>

                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-semibold text-primary mb-2">Cours 2 – Captiver et convaincre</h4>
                            <p className="text-sm text-muted-foreground">
                              Objectif : transformer le pitch en une prise de parole impactante et mémorable.
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                          <h4 className="font-semibold mb-2">Les Call Coaching individuels</h4>
                          <p className="text-sm text-muted-foreground">
                            Deux séances personnalisées pour :
                          </p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                            <li>Ajuster le discours selon le contexte ou le public</li>
                            <li>Travailler la voix, la posture ou la gestuelle spécifique</li>
                            <li>Répéter et renforcer la confiance avant le passage final</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-primary/5 rounded-lg">
                          <p className="text-sm font-medium">
                            Les Pitchers, c'est un programme court et intense pour oser se présenter, 
                            défendre son projet et parler avec assurance.
                          </p>
                          <p className="text-sm font-semibold text-primary mt-2">
                            En 15 jours, ta voix devient ton meilleur outil d'influence.
                          </p>
                        </div>

                        <Button className="w-full" size="lg">
                          Réserve ton rdv téléphonique
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            {/* À VOIX HAUTE - Les cours à la carte */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Mic2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">À VOIX HAUTE</CardTitle>
                <CardDescription className="text-lg">
                  Les cours à la carte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">100€</span>
                    <span className="text-muted-foreground">à distance</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">130€</span>
                    <span className="text-muted-foreground">en présentiel</span>
                  </div>
                  <p className="text-muted-foreground">Séances d'1h30</p>
                  <p className="text-foreground">
                    Travaille ce dont tu as besoin, quand tu en as besoin.
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4" size="lg">
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">À VOIX HAUTE - Les cours à la carte</DialogTitle>
                        <DialogDescription className="text-lg">
                          100€ à distance / 130€ en présentiel - Séances d'1h30
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 mt-4">
                        <div>
                          <p className="text-muted-foreground italic">
                            Parce qu'il n'existe pas une seule façon de parler, mais la tienne,
                            les cours à la carte te permettent de travailler ce dont tu as besoin, quand tu en as besoin.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-bold text-lg">Chaque séance est un espace privilégié pour :</h3>
                          
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">Gagner en confiance et en assurance à l'oral</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">Enrichir ton vocabulaire et affirmer ton style</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">Travailler ta voix, ta posture et ton énergie</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">Préparer une prise de parole spécifique (pitch, entretien, réunion, intervention…)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                          <p className="text-sm">
                            Tu choisis ton objectif, et ensemble nous construisons une séance personnalisée, vivante et bienveillante.
                          </p>
                        </div>

                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold mb-3">Tarifs</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">À distance</span>
                              <span className="font-bold text-primary text-xl">100 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">En présentiel</span>
                              <span className="font-bold text-primary text-xl">130 €</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Séance d'1h30</p>
                          </div>
                        </div>

                        <Button className="w-full" size="lg">
                          Réserve ton rdv téléphonique
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
