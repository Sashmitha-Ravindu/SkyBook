import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  {
    path: 'search',
    title: 'Search flights | SkyBook',
    loadComponent: () =>
      import('./features/search/search-page').then((m) => m.SearchPage),
  },
  { path: '**', redirectTo: '' },
];
