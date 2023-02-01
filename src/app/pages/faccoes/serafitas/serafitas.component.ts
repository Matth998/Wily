import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-serafitas',
  templateUrl: './serafitas.component.html',
  styleUrls: ['./serafitas.component.scss']
})
export class SerafitasComponent implements OnInit {

  constructor(

    private route: Router

  ) { }

  ngOnInit(){

    environment.type = 'serafitas'

  }

  lev() {

    this.route.navigate(["/confirm-your-choose"]);
    environment.personagem = 'lev';


  }

  yara() {

    this.route.navigate(["/confirm-your-choose"]);
    environment.personagem = 'yara';

  }

}
