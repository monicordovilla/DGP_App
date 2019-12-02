import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  actividad = {
    "nombreActividad": "Patinaje", 
    "descripcion": "ejemplo de actividad con procedure",
    "lugar": "Granada",
    "fecha":"2019-12-12 17:30",
    "duracion": 3
  }

  constructor(){}


}
