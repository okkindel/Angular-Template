
import { AuthGuard } from './auth';
import { NgModule } from '@angular/core';
import { HomeModule, HomeComponent } from './home';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent, LoginPageComponent } from './auth/containers';
import { InfoComponent, BadRequestComponent } from './shared/components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: BadRequestComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      useHash: true,
      enableTracing: false,
    }),
    HomeModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
