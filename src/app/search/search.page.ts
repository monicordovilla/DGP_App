import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../providers/proveedor.service';

import{ImagePicker} from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  actividades=[];
  categorias=[];
  mis_categorias=[];
  esSocio=true;
  usuario=1;

  //filtros
  tipo=[];
  fecha_inicio;
  fecha_fin;
  categorias_seleccionadas=[];
  

  constructor(public proveedor:ProveedorService, public imagePîcker:ImagePicker, public file:File){
    this.ionViewDidLoad();
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
    this.proveedor.obtenerMisCategorias(this.usuario).subscribe(
      (data) => {
        this.mis_categorias = data;
        console.log(this.mis_categorias);
        for(let i=0; i<this.mis_categorias.length; i++)
          this.categorias_seleccionadas.push(false);
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  mostrarFiltros() {
    document.getElementById("filtros").classList.toggle("filtros");
  }

  aplicarFiltros(){
    console.log( "FECHA: " + this.fecha_inicio + this.fecha_fin);
    console.log( "CATEGORIAS: " + this.mis_categorias[0]);
  }

  change(event, id){
    this.categorias_seleccionadas[id]!=this.categorias_seleccionadas[id];
  }

  buscar(event){
    let valor=event.target.value;

    this.proveedor.buscarActividades(valor, this.esSocio).subscribe(
      (data) => {
        this.actividades = data;
        this.categorias=[];
        let dateTime;
        let parts;

        for(var i=0; i<this.actividades.length; i++){
          dateTime = this.actividades[i].fecha;
          parts= dateTime.split(/[- :TZ]/);
          this.actividades[i].fecha = parts[2] + "-" + parts[1] + "-" + parts[0] + " | " + parts[3] + ":" + parts[4];
          this.categorias=[];
          this.proveedor.obtenerCategoriasActividad(this.actividades[i].id).subscribe(
            (data) => {
              console.log(data);
              this.categorias.push(data);
            })
        }
      },
      error => {
          console.log(<any>error);
      }
    )

  }
}
