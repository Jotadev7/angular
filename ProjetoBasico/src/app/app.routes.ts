import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { TodoComponent } from './demos/todo-list/todo.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';

const rootRouterConfig : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'cadastro', component: CadastroComponent, canDeactivate: []}, // O CadastroGuard devia estar no canDeactivate.
    {path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule)},
    {path: 'filmes', component: FilmesComponent},
    {path: 'bar', component: BarComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard], canActivate: [AuthGuard]},

    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule{}