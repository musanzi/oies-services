import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  imports: [NgOptimizedImage],
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent {
  activities: { title: string; description: string; image: string }[] = [
    {
      title: 'Conférences Utajiri',
      description:
        "Nous organisons chaque année des conférences sur l'éveil de la conscience des jeunes entrepreneurs et des femmes. Ces événements, connus sous le nom de Utajiri event, visent à inspirer et à éduquer la prochaine génération de leaders,...",
      image: '/images/meeting.jpeg'
    },
    {
      title: 'Élevage',
      description:
        "Nous sommes activement impliqués dans l'élevage, comprenant diverses espèces telles que les oies, les porcs, les poules et les chèvres. Nos pratiques d'élevage sont conçues pour assurer le bien-être des animaux et la production durable,...",
      image: '/images/elevage.jpg'
    },
    {
      title: 'Agriculture',
      description:
        "Notre engagement dans l'agriculture est vaste, incluant la culture de palmiers, de sapins, de noix de cajou, de maïs, de soja, d'arachide et d'ananas. Nous utilisons des méthodes agricoles durables pour garantir des récoltes abondantes tout en respectant l'environnement,...",
      image: '/images/agro.jpeg'
    },
    {
      title: 'Énergie et construction',
      description:
        "Nous investissons également dans le secteur de l'énergie, notamment l'énergie solaire avec des installations modernes, l'énergie par biomasse utilisant des déchets et l'énergie électrique en collaboration avec la SNEL. Nos initiatives énergétiques visent à promouvoir des sources d'énergie renouvelables et à réduire l'empreinte carbone,...",
      image: '/images/electricity.jpeg'
    }
  ];
}
