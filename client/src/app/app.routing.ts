import { Routes } from '@angular/router';

export const routes: Routes = [
// export default [
  {
    path: 'home',
    component: () => import('./home/home.page').then((m) => m.HomePage),
    /* import default export from routing component, don't need .then() */
    // loadComponent: () => import('./home/home.page') 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
] as Routes;