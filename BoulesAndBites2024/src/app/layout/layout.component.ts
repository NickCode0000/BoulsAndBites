import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {FaqComponent} from "../faq/faq.component";
import {ReserveerBlockComponent} from "../reserveer-block/reserveer-block.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
    ReserveerBlockComponent,
    ReserveerBlockComponent,
    ReserveerBlockComponent,
    ContactComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
