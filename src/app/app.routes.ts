import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import ('./propiedad-list/propiedad-list.component')
    }


];
