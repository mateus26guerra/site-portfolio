import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importe os componentes que você JÁ TEM no projeto
import { ListaDeTodosOsCursos } from './shared/lista-de-todos-os-cursos/lista-de-todos-os-cursos';
import { Home } from './component/home/home';
import { Experiencia } from './component/experiencia/experiencia';
import { Capgemini } from './component/experiencia/capgemini/capgemini';

const routes: Routes = [
  // suas rotas existentes
  { path: '', component: Home },
  { path: 'curso', component: ListaDeTodosOsCursos },
  { path: 'experiencia', component: Experiencia },
  {path: 'capgemini', component: Capgemini},

  // nova rota de detalhe
  // rota curinga — sempre por último
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}