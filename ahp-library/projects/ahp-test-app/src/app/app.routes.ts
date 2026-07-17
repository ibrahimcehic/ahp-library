import { Routes } from '@angular/router';
import { Home } from './home/home';
import { App } from './app';
import { VisekriterijumskoOdlucivanje } from './visekriterijumsko-odlucivanje/visekriterijumsko-odlucivanje';
import { AhpBiblioteka } from './ahp-biblioteka/ahp-biblioteka';

export const routes: Routes = [
    {
        path:'home',
        component:Home
    },
    {
        path:'',
        component:Home
    },
    {
        path:'visekriterijumsko-odlucivanje',
        component:VisekriterijumskoOdlucivanje
    },
    {
        path:'ahp-biblioteka',
        component:AhpBiblioteka
    }
];
