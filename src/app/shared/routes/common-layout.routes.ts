import { Routes } from '@angular/router';

export const COMMON_LAYOUT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];
