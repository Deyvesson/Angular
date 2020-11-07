import { Component, OnInit } from '@angular/core';
import { ListagemDD } from 'src/app/core/interfaces/listagem.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  disable1 = true;
  disable2 = true;
  disable3 = true;
  ataque = 0;

  favoritar(index: number){
    this.listagem[index].favorito = !this.listagem[index].favorito
  }

  atacar(){
      this.ataque = Math.floor(Math.random() * 21);
  }

  listagem: Array<ListagemDD> = [
    {
        "classe":  "Bárbaro",
        "descricao": "A fierce warrior of primitive background who can enter a battle rage",
    },
    {
        "classe":  "Bardo",
        "descricao": "An inspiring magician whose power echoes the music of creation",
    },
    {
        "classe":  "Paladino",
        "descricao": "A holy warrior bound to a sacred oath",
    },
    {
        "classe":  "Mago",
        "descricao": "A scholarly magic-user capable of manipulating the structures of reality",
    },
    {
        "classe":  "Druída",
        "descricao": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
    }
    ]

  ngOnInit(): void {
  }

}
