import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [],
  templateUrl: './goals.html'
})
export class Goals {
  goals: { title: string; description: string; icon: string }[] = [
    {
      title: 'Éveiller la conscience des jeunes entrepreneurs',
      description: 'Organiser des conférences et ateliers annuels pour inspirer et éduquer les jeunes entrepreneurs.',
      icon: 'bi bi-lightbulb'
    },
    {
      title: "Soutenir l'entrepreneuriat féminin",
      description: 'Créer des opportunités de réseautage et de mentorat pour les femmes entrepreneurs.',
      icon: 'bi bi-people'
    },
    {
      title: "Promouvoir l'innovation et la créativité",
      description: "Fournir des ressources et des outils pour encourager l'innovation dans les startups.",
      icon: 'bi bi-gear'
    },
    {
      title: 'Faciliter les connexions entre entrepreneurs',
      description:
        'Organiser des événements de réseautage pour permettre aux entrepreneurs de se connecter et de collaborer.',
      icon: 'bi bi-chat'
    },
    {
      title: 'Fournir des ressources éducatives',
      description:
        'Développer et partager des guides, des études de cas et des formations pour soutenir la croissance des entrepreneurs.',
      icon: 'bi bi-book'
    }
  ];
}
