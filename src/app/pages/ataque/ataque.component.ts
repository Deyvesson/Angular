import { Component, OnInit } from '@angular/core';
import { ListagemDD } from 'src/app/core/interfaces/listagem.interface';

@Component({
  selector: 'app-ataque',
  templateUrl: './ataque.component.html',
  styleUrls: ['./ataque.component.css']
})
export class AtaqueComponent implements OnInit {
  ataque = 0;
  atacar(){
    this.ataque = Math.floor(Math.random() * 21);
  } 


  ngOnInit(): void {
  }

}
