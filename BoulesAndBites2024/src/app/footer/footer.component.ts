import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private renderer: Renderer2) {}

  scrollToTop() {
    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
