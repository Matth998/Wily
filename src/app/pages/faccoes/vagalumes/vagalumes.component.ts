import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-vagalumes',
  templateUrl: './vagalumes.component.html',
  styleUrls: ['./vagalumes.component.scss']
})
export class VagalumesComponent implements OnInit {

  constructor(

    private route: Router

  ) { }

  ngOnInit() {

    environment.type = 'vagalumes'

  }

  ellie(){

    this.route.navigate(["/confirm-your-choose"]);
    environment.personagem = 'ellie';


  }

  marlene(){

    this.route.navigate(["/confirm-your-choose"]);
    environment.personagem = 'marlene';

  }

}
