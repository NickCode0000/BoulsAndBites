import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {NgForOf} from "@angular/common";

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Mag ik een reservering annuleren en geld terugkrijgen?',
      answer: 'Opzeggen van een online reservering niet mogelijk. Er vindt geen restitutie van geld plaats. Meer informatie. Ik wil je tegemoetkomen met de reservering te verplaatsen naar een andere datum.',
      open: false
    },
    {
      question: 'Ik wil een reservering maken.',
      answer: 'Wij werken uitsluitend met online reserveringen. Op de volgende link kunt u een reservering plaatsen en beschikbaarheid bekijken https://utrecht.boulesbitesbar.nl/welkom hier kan je tevens arrangementen toevoegen!',
      open: false
    },
    {
      question: 'Ik wil mijn reservering aanpassen, tot wanneer kan ik een wijziging maken in het aantal mensen',
      answer: 'Het definitieve aantal personen kan later doorgegeven worden maar houd wel rekening mee met onze algemene voorwaarden. https://www.boulesbitesbar.nl/utrecht/algemene-voorwaarden/',
      open: false
    },
    {
      question: 'Ik wil online een reservering maken foor boules&food arrangement maar moet ik nu al de etenskeuzes aangeven - ik weet niet wat mijn gezelschap wilt eten ',
      answer: 'Met grote groepen werken wij met vooraf gemaakte keuzes - dat maakt het efficiënter voor de keuken en de bediening.Ik wil je adviseren om de food arrangement te boeken als jullie toch van plan zijn bij ons te eten - het kan zijn dat op drukke avonden de keuken al vol is en bestellen ter plekke niet meer mogelijk is.\n',
      open: false
    },
    {
      question: 'Wat is inbegrepen in de drank arrangement? ',
      answer: 'Bud van de tap, fris, koffie en thee',
      open: false
    },
    {
      question: 'Hoeveel banen heb ik nodig? ',
      answer: 'Wij adviseren maximaal 8 mensen per baan. Op de volgende link kunt u de spelregels vinden (er is ook een leuke print versie - misschien handig om bij de interne uitnodiging toe te voegen) https://www.boulesbitesbar.nl/utrecht/boules/. Een print van de spelregels is ook bij elke baan.',
      open: false
    },
    {
      question: 'Kan ik terplekke drankjes en hapjes bestellen?  ',
      answer: 'Ja, dit kan',
      open: false
    },
    {
      question: 'Moet ik hapjes en drankjes vooraf bestellen?  ',
      answer: 'nee, dat is niet nodig, maar wel makkelijk voor de keuken',
      open: false
    },
    {
      question: 'Kan ik daarna blijven borrelen?  ',
      answer: 'Ja, als er plek is. Jullie kunnen plaats nemen op de tonnen/bar/bankjes bij de banen/tonnen (elke baan heeft een eigen ton). Als er zitplaatsen vrij zijn, dan is het uiteraard mogelijk.',
      open: false
    },
    {
      question: 'Ik wil a-la-carte eten - moet ik een tafel reserveren? ',
      answer: 'ja, graag een mail sturen naar e-mail reserveringen',
      open: false
    },



  ];

  toggleAnswer(faq: Faq) {
    faq.open = !faq.open;
    faq.open
  }
}
