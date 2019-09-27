import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then( m => m.SearchModule) },
  { path: 'code', loadChildren: () => import('./pages/code/code.module').then( m => m.CodeModule) },
  { path: 'file', loadChildren: () => import('./pages/file/file.module').then( m => m.FileModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule) },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', enableTracing: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
