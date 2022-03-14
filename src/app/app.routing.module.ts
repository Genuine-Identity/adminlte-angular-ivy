import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    // loadChildren: './layout/admin/admin-layout.module#AdminLayoutModule',
    loadChildren: () =>
      import('./layout/admin/admin-layout.module').then(
        (x) => x.AdminLayoutModule
      ),
  },
  {
    path: 'user',
    // loadChildren: './layout/default/default-layout.module#DefaultLayoutModule',
    loadChildren: () =>
      import('./layout/default/default-layout.module').then(
        (x) => x.DefaultLayoutModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
