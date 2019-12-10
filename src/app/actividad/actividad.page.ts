import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProveedorService } from '../providers/proveedor.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage {
  actividad = {
    nombre:null,
    descripcion:null,
    lugar:null,
    fecha: null,
    duracion: "",
    imagen: null
  };

  id = null;

  categorias = []

  constructor(private rutaActiva: ActivatedRoute,  public proveedor:ProveedorService){
    this.rutaActiva.snapshot.params;
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.id =  this.rutaActiva.snapshot.params.id;
    this.proveedor.obtenerActividad(this.id).subscribe(
      (data) => {
        console.log(data[0]);
        this.actividad.nombre = data[0].nombre;
        this.actividad.descripcion = data[0].descripcion;
        this.actividad.lugar = data[0].lugar;
        this.actividad.fecha = data[0].fecha;
        let duracion = data[0].duracion;
        this.actividad.imagen = data[0].imagen;

        let dateTime = this.actividad.fecha;
        let parts= dateTime.split(/[- :TZ]/);
        this.actividad.fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];

        let hora = Math.floor(duracion/60);
        let minutos = duracion - hora*60;

        if(hora!=0){
            this.actividad.duracion += hora + " horas ";
            if(minutos!=0){
              this.actividad.duracion += "y " + minutos + " minutos";
            }
        }
        else if(minutos!=0)
          this.actividad.duracion += minutos + " minutos";
          },
      error => {
          console.log(<any>error);
      }
    )

      this.proveedor.obtenerCategoriasActividad(this.id).subscribe(
        (data) => {
          this.categorias=data;
        },
        error => {
          console.log(<any>error);
        }
      )
    
  }

}