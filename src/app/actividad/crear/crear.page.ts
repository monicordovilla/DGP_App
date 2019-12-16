import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/providers/proveedor.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage{
 
  categorias=[];

  constructor(public proveedor:ProveedorService){
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    this.proveedor.obtenerCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      error => {
          console.log(<any>error);
      }
    )
    
  }

}

