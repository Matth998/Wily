import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-confirm-your-choose',
  templateUrl: './confirm-your-choose.component.html',
  styleUrls: ['./confirm-your-choose.component.scss']
})
export class ConfirmYourChooseComponent implements OnInit {

  photo: string;
  type = environment.type;
  personagem = environment.personagem;
  logo: string;
  color: string;

  constructor() { }

  ngOnInit() {

    if (environment.type == "vagalumes") {

      this.logo = "https://i.imgur.com/6sdftr6.jpg";
      this.color = '#fff';

    } else if (environment.type == "wlf") {

      this.logo = "https://i.imgur.com/QqeanMM.jpg";
      this.color = '#000';

    } else if (environment.type == "serafitas") {

      this.logo = "https://i.imgur.com/ONpLTe0.jpg";
      this.color = '#000';

    }

    if (environment.personagem == 'ellie') {

      this.photo = 'https://i.imgur.com/Qy65jRQ.jpg'

    } else if (environment.personagem == 'marlene') {

      this.photo = 'https://i.imgur.com/soW27jP.jpg';

    }else if(environment.personagem == 'abby'){

      this.photo = 'https://wallpapercave.com/wp/wp9128119.jpg';

    }else if(environment.personagem == 'isaac'){

      this.photo = 'https://i.imgur.com/FoDWLFl.png';

    }else if(environment.personagem == 'lev'){

      this.photo = 'https://i.imgur.com/u2RWtbF.jpg';

    }else if(environment.personagem == 'yara'){

      this.photo = 'https://www.wasd.pt/wp-content/uploads/2017/10/yara.jpg'

    }

  }

  clicou() {

    environment.validation = true;

  }

}
