import { Component } from '@angular/core';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
<<<<<<< HEAD
=======
  /*actividades = [
    {
      "id": 0,
      "nombreActividad": "Patinaje", 
      "descripcion": "ejemplo de actividad con procedure",
      "lugar": "Granada",
      "fecha":"2019-12-12 17:30",
      "duracion": 200,
      "imagen" : "data:image/jpeg;base64,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"
    },
    {
      "id": 1,
      "nombreActividad": "Cine", 
      "descripcion": "ejemplo de actividad con procedure",
      "lugar": "Granada, Chana",
      "fecha":"2019-11-5 18:00",
      "duracion": 300,
      "imagen" : "https://unpsicologoenmadrid.es/wp-content/uploads/2019/02/beneficios-psicologicos-de-la-actividad-fisica.png"
    }
  ]*/
>>>>>>> master

  actividades=[];

  categorias=[
    [
      {
        "id": 0,
        "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30598.png"
      },
      {
        "id": 0,
        "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/2/24671.png"
      }
    ]
  ];

  constructor(public proveedor:ProveedorService){
<<<<<<< HEAD
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    let dateTime;
    let parts;
    this.proveedor.obtenerActividades().subscribe(
      (data) => {
        this.actividades = data;

        for(var i=0; i<this.actividades.length; i++){
          dateTime = this.actividades[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];
          this.categorias.push([
            {
              "id": 1,
              "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"
            }
          ]);
        }
      },
      error => {
          console.log(<any>error);
      }
    )
    
=======
   this.ionViewDidLoad();
    var dateTime;
    let parts;
    for(var i=0; i<this.actividades.length; i++){
      dateTime = this.actividades[i].fecha;
      parts= dateTime.split(/[- ]/);
      this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3];
      this.categorias.push([
        {
          "id": 1,
          "imagen": "http://www.arasaac.org/repositorio/thumbs/10/200/3/30387.png"
        }
      ]);
    }
  }

  ionViewDidLoad(){
    this.proveedor.obtenerActividades().subscribe(
      result => {
          this.actividades = result;

      },
      error => {
          console.log(<any>error);
      }
    )

  
>>>>>>> master
  }

}