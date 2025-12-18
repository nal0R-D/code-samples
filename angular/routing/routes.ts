import { Routes } from '@angular/router';

/**
 * Application-wide routes.
 *
 * Demonstrates:
 * - default redirect
 * - lazy loaded standalone components
 * - feature-based route splitting
 */
export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component')
        .then(m => m.HomeComponent),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes')
        .then(m => m.ADMIN_ROUTES),
  },
];
