import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './code.component';
import { CodeDetailComponent } from './code-detail/code-detail.component';


const routes: Routes = [
  { path: 'add', component: CodeComponent },
  { path: ':id', component: CodeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
