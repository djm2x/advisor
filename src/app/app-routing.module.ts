import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './route.guard';

const routes: Routes = [
  { path: '', redirectTo: 'concern', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    , data: { animation: 'home' }
  },
  {
    path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
    , data: { animation: 'list' }
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', data: { animation: 'login' } },
  {
    path: 'concern', loadChildren: './concern/concern.module#ConcernPageModule'
    , canActivate: [RouteGuard], data: { animation: 'concern' }
  },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule', data: { animation: 'signup' } },
  { path: 'anime', loadChildren: './anime/anime.module#AnimePageModule', data: { animation: 'anime' } },
  { path: 'forget', loadChildren: './forget/forget.module#ForgetPageModule', data: { animation: 'forget' } },
  { path: 'form/:id', loadChildren: './form/form.module#FormPageModule', data: { animation: 'form' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
