import { Routes } from '@angular/router';
import { homedir } from 'os';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}
];
