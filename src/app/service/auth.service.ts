import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logged(){

    let ok = false;

    if(environment.validation == true){

      ok = true

    }

    return ok

  }
}
