import { Component, OnInit } from '@angular/core';

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

  favoritar(n){
    if(n === 1){
      this.disable1 = !this.disable1
    }
    else if(n === 2){
      this.disable2 = !this.disable2
    }
    else{
      this.disable3 = !this.disable3
    }
  }

  atacar(){
      this.ataque = Math.floor(Math.random() * 21);
  }

  ngOnInit(): void {
  }

}
