import { ProcessosRegisterComponent } from './pages/processos-register/processos-register.component';
import { Routes } from '@angular/router';
import { ProcessosListComponent } from './pages/processos-list/processos-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'processos-list', pathMatch: 'full'},
  {path: 'processos-list', component: ProcessosListComponent},
  {path: 'processos-register', component: ProcessosRegisterComponent},
];
