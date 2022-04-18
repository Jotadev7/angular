import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { TestesComponent } from './testes/testes.component';

const routes: Routes = [
  {path: '', redirectTo: '/contador', pathMatch: 'full'},
  {path: 'contador', component: ContadorComponent},
  {path: 'testes', component: TestesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
