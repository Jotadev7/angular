import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';

const routes: Routes = [
  {path: '', redirectTo: '/contador', pathMatch: 'full'},
  {path: 'contador', component: ContadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
