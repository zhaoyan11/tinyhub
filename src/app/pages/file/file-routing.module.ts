import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file.component';
import { FileDetailComponent } from './file-detail/file-detail.component';


const routes: Routes = [
  { path: 'add', component: FileComponent },
  { path: ':id', component: FileDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
