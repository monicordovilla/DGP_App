import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  obtenerActividades(): Observable<any>{
    return this.http.get('http://localhost:3000/actividades');
  }

  obtenerActividad(i): Observable<any>{
    return this.http.get('http://localhost:3000/actividades?id='+ i);
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get('http://localhost:3000/actividades/categorias');
  }

  obtenerCategoriasActividad(i): Observable<any>{
    return this.http.get('http://localhost:3000/actividades/categoriasDeActividad?id='+i);
  }
}
