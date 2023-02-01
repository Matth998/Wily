import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-wlf',
  templateUrl: './wlf.component.html',
  styleUrls: ['./wlf.component.scss']
})
export class WlfComponent implements OnInit {

  constructor(

    private route: Router

  ) { }

  ngOnInit() {

    environment.type = 'wlf'

  }

  abby(){

    this.route.navigate(['/confirm-your-choose']);
    environment.personagem = 'abby';

  }

  isaac(){

    this.route.navigate(['/confirm-your-choose']);
    environment.personagem = 'isaac';

  }

}
