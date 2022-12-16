import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
// export default [
  {
    path: 'home',
    component: HomePage,
    /* import default export from routing component, don't need .then() */
    // loadComponent: () => import('./home/home.page') 
  },
  {
    path: 'home2',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    /* import default export from routing component, don't need .then() */
    // loadComponent: () => import('./home/home.page') 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
] as Routes;