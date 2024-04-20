import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scrollToCoordinates(xPercentage: number, yPercentage: number) {
    // Bepaal de breedte en hoogte van het venster
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Bereken de werkelijke coördinaten op basis van percentages
    const x = xPercentage / 100 * windowWidth;
    const y = yPercentage / 100 * windowHeight;

    // Scroll naar de berekende coördinaten
    window.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth'
    });
  }
}
