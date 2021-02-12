import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  {
    path:'login', component: LoginComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
