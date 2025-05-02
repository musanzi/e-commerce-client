import { ILink } from '../types/link.type';

export const TOPBAR_LINKS: ILink[] = [
  {
    name: 'Accueil',
    path: '/',
    description: 'Découvez la plateforme',
    icon: 'matHomeOutline',
    exactUrl: true
  },
  {
    name: 'Produits',
    path: '/calls',
    description: 'Voir les produits',
    icon: 'matProductionQuantityLimitsOutline',
    exactUrl: false
  }
];

export const FOOTER_LINKS: ILink[] = [
  {
    name: 'Email',
    path: 'mailto:wilfriedm@cinolu.org',
    external: true
  },
  {
    name: 'Téléphone',
    path: 'tel:+243979265726',
    external: true
  },
  {
    name: 'Whatsapp',
    path: 'https://api.whatsapp.com/send?phone=+243979265726',
    external: true
  }
];

export const SOCIAL_LINKS: ILink[] = [
  { name: 'Facebook', path: 'https://www.facebook.com/fikiriSDG?mibextid=ViGcVu', external: true },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/fikirisdg/?fbclid=IwAR32B-_YEZzAz-9K35Ee7xH1dvHKz1aeMprDZix8QG-DXQODqgVC8xK2pYw',
    external: true
  },
  { name: 'LinkedIn', path: 'https://www.linkedin.com/showcase/fikiri', external: true }
];
