import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },  { path: 'actividad', loadChildren: './actividad/actividad.module#ActividadPageModule' },
  { path: 'valoracion', loadChildren: './valoracion/valoracion.module#ValoracionPageModule' },
  { path: 'masinfo', loadChildren: './actividad/masinfo/masinfo.module#MasinfoPageModule' },
  { path: 'chat', loadChildren: './actividad/chat/chat.module#ChatPageModule' },
  { path: 'crear', loadChildren: './actividad/crear/crear.module#CrearPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
