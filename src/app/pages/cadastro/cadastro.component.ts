import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  name = "";
  raca = "";
  classe = "";
  nivel = "";
  telefone = "";

  cadastrar(cadastro: NgForm){
    if(cadastro.invalid){
      window.alert('Campos inválidos')
    }
  }

  ngOnInit(): void {
  }

}
