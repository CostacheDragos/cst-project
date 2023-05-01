import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  
  //TODO: acces the main page only after login
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
