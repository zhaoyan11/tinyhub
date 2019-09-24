import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./pages/search-result/search-result.module').then( m => m.SearchResultModule) },
  { path: 'code', loadChildren: () => import('./pages/code/code.module').then( m => m.CodeModule) },
  { path: 'file', loadChildren: () => import('./pages/file/file.module').then( m => m.FileModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
