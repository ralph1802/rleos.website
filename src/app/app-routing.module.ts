import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic-pages.module').then(m => m.BasicPagesModule)
  },
  { path: '**', redirectTo: 'basic/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
