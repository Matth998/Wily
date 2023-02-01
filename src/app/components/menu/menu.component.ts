import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logo: string

  constructor(

    private router: Router

  ) { }

  ngOnInit() {

    if (environment.type == "vagalumes") {

      this.logo = "https://i.imgur.com/5DKLhfs.png";

    } else if (environment.type == "wlf") {

      this.logo = "https://static.wikia.nocookie.net/thelastofus/images/1/11/WLF_logo.png";

    } else if (environment.type == "serafitas") {

      this.logo = "https://static.wikia.nocookie.net/thelastofus/images/2/27/Seraphites_logo.png";

    } 
  }

  logoff(){

    this.router.navigate(['/']);
    environment.validation = false;
    
  }

}
