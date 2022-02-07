import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';
import { JapamalasComponent } from './modules/artesanatos/japamalas/japamalas.component';
import { EscapulariosComponent } from './modules/artesanatos/escapularios/escapularios.component';
import { PingentesComponent } from './modules/artesanatos/pingentes/pingentes.component';
import { BioalinhamentoComponent } from './modules/terapias/bioalinhamento/bioalinhamento.component';
import { CoachingComponent } from './modules/terapias/coaching/coaching.component';
import { ReikiComponent } from './modules/terapias/reiki/reiki.component';
import { MentoriaComponent } from './modules/terapias/mentoria/mentoria.component';
import { ConstelacaoComponent } from './modules/terapias/constelacao/constelacao.component';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JapamalasComponent,
    EscapulariosComponent,
    PingentesComponent,
    BioalinhamentoComponent,
    CoachingComponent,
    ReikiComponent,
    MentoriaComponent,
    ConstelacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    SharedModule,
    MatButtonModule,
    CommonModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
