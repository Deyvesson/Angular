import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AtaqueComponent } from './pages/ataque/ataque.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes, } from '@angular/router';

const appRoutes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "ataque", component: AtaqueComponent
  },
  {
    path: "cadastro", component: CadastroComponent
  },
  {
    path: "**", redirectTo: ""
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    AtaqueComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
