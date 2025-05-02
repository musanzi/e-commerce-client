import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_LINKS, TOPBAR_LINKS, SOCIAL_LINKS } from '../../utils/data/links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  links = [
    { title: 'Parcourir', urls: TOPBAR_LINKS },
    { title: 'Contact', urls: FOOTER_LINKS },
    { title: 'Socials', urls: SOCIAL_LINKS }
  ];

  getYear(): number {
    return new Date().getFullYear();
  }
}
