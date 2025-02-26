import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'heroes-list',
    pathMatch: 'full'
  },
  {
    path: 'heroes-list',
    loadChildren: () => import('./pages/heroes-list/heroes-list.module').then( m => m.HeroesListPageModule)
  },
  {
    path: 'hero-detail',
    loadChildren: () => import('./pages/hero-detail/hero-detail.module').then( m => m.HeroDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
