import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePage2 } from './home2/home.page';

export const routes: Routes = [
// export default [
  {
    path: 'home',
    component: HomePage,
    pathMatch: 'full'
    /* import default export from routing component, don't need .then() */
    // loadComponent: () => import('./home/home.page') 
  },
  {
    /* testing lazy loading, currently not working */
    path: 'home2', 
    // component: HomePage2
    loadComponent: () => import('./home2/home.page').then((m) => m.HomePage2),
    /* import default export from routing component, don't need .then() */
    // loadComponent: () => import('./home/home.page') 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
] as Routes;