import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscapulariosComponent } from './modules/artesanatos/escapularios/escapularios.component';
import { JapamalasComponent } from './modules/artesanatos/japamalas/japamalas.component';
import { PingentesComponent } from './modules/artesanatos/pingentes/pingentes.component';
import { HomeComponent } from './modules/home/home.component';
import { BioalinhamentoComponent } from './modules/terapias/bioalinhamento/bioalinhamento.component';
import { CoachingComponent } from './modules/terapias/coaching/coaching.component';
import { ConstelacaoComponent } from './modules/terapias/constelacao/constelacao.component';
import { MentoriaComponent } from './modules/terapias/mentoria/mentoria.component';
import { ReikiComponent } from './modules/terapias/reiki/reiki.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
},
  {
    path: 'terapias/coaching',
    component: CoachingComponent,
  },
  {
    path: 'terapias/bioalinhamento',
    component: BioalinhamentoComponent,
  },
  {
    path: 'terapias/constelacao',
    component: ConstelacaoComponent,
  },
  {
    path: 'terapias/mentoria',
    component: MentoriaComponent,
  },
  {
    path: 'terapias/reiki',
    component: ReikiComponent,
  },
  {
    path: 'artesanatos/escapularios',
    component: EscapulariosComponent,
  },
  {
    path: 'artesanatos/japamalas',
    component: JapamalasComponent,
  },
  {
    path: 'artesanatos/pingentes',
    component: PingentesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
