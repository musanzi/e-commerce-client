import { Route } from '@angular/router';
import { auhtRoutes } from './auth/auth.routes';
import { landingRoutes } from './landing/landing.routes';
import { LayoutComponent } from './shared/layout/layout.component';
import { unauthGuard } from './shared/guards/no-auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    data: { layout: 'primary' },
    loadChildren: () => landingRoutes
  },
  {
    path: '',
    component: LayoutComponent,
    data: { layout: 'empty' },
    canActivate: [unauthGuard],
    loadChildren: () => auhtRoutes
  },
  {
    path: '**',
    component: LayoutComponent,
    data: { layout: 'primary' },
    loadChildren: () => landingRoutes
  }
];
