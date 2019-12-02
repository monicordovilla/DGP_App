import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  actividad = {
    "nombreActividad": "Patinaje", 
    "descripcion": "ejemplo de actividad con procedure",
    "lugar": "Granada",
    "fecha":"2019-12-12 17:30",
    "duracion": 3
  }
  constructor() { }

  ngOnInit() {
  }

}
