import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  raca = "";
  classe = "";
  nivel = "";
  telefone = "";

  private _isHidden = "teste";

  get isHidden(){
    return this._isHidden;
  }

  getEvent(event, campo: string){
    if(campo === "nome"){ this.name = event.target.value}
    else if(campo === "raca"){this.raca = event.target.value}
    else if(campo === "classe"){this.classe = event.target.value}
    else if(campo === "nivel"){this.nivel = event.target.value}
    else if(campo === "telefone"){this.telefone = event.target.value}
  }
}
