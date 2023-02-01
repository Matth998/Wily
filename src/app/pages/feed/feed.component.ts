import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  music = '';
  photo: string;
  type = environment.type;
  personagem = environment.personagem;
  logo: string;
  pronome = '';
  name = ''

  constructor() { }

  ngOnInit() {

    if (environment.validation == true) {

      this.music = 'assets/music/TakeonMe.mp3';

    }

    if (environment.personagem == 'ellie' || environment.personagem == 'marlene' || environment.personagem == 'abby' || environment.personagem == 'yara') {

      this.pronome = 'a'

    }else if(environment.personagem == 'lev' || environment.personagem == 'isaac'){

      this.pronome = 'o';

    }

    if (environment.personagem == 'ellie') {

      this.name = 'Ellie'

    } else if (environment.personagem == 'marlene') {

      this.name = 'Marlene';

    }else if(environment.personagem == 'abby'){

      this.name = 'Abby';

    }else if(environment.personagem == 'isaac'){

      this.name = 'Isaac';

    }else if(environment.personagem == 'lev'){

      this.name = 'Lev';

    }else if(environment.personagem == 'yara'){

      this.name = 'Yara'

    }

    if (environment.type == "vagalumes") {

      this.logo = "https://i.imgur.com/5DKLhfs.png";

    } else if (environment.type == "wlf") {

      this.logo = "https://static.wikia.nocookie.net/thelastofus/images/1/11/WLF_logo.png";

    } else if (environment.type == "serafitas") {

      this.logo = "https://static.wikia.nocookie.net/thelastofus/images/2/27/Seraphites_logo.png";

    } 

  }


}
