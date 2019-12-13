import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  obtenerActividades(): Observable<any>{
    return this.http.get('http://localhost:3000/actividades');
  }

  obtenerActividadesRecomendadas(id, esSocio): Observable<any> {
    var consulta="recomendadasVoluntario";
    if(esSocio)
      consulta="recomendadasSocio";
    return this.http.get('http://localhost:3000/actividades/' + consulta + "?id=" + id);
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

  apuntadoActividad(id_part, id_act, esSocio): Observable<any>{
    var consulta="apuntadoVoluntario";
    if(esSocio)
      consulta="apuntadoSocio";

    return this.http.get('http://localhost:3000/actividades/' + consulta + '?id_part='+ id_part + '&id_act=' + id_act);
  }

  apuntarse(postData, esSocio): Observable<any>{
    var consulta="participarVoluntario";
    if(esSocio)
      consulta="participarSocio";

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://localhost:3000/actividades/" + consulta, JSON.stringify(postData), httpOptions);
  }

  desapuntarse(postData, esSocio): Observable<any>{
    var consulta="eliminarParticipacionVoluntario";
    if(esSocio)
      consulta="eliminarParticipacionSocio";

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://localhost:3000/actividades/" + consulta, JSON.stringify(postData), httpOptions);
  }

  misActividadesRealizadas(id, esSocio): Observable<any>{
    var consulta="misActividadesVoluntario";
    if(esSocio)
      consulta="misActividadesSocio";

      return this.http.get('http://localhost:3000/actividades/' + consulta + '?id='+ id +  '&proximas=0');
  }
  misActividadesProximas(id, esSocio): Observable<any>{
    var consulta="misActividadesVoluntario";
    if(esSocio)
      consulta="misActividadesSocio";

      return this.http.get('http://localhost:3000/actividades/' + consulta + '?id='+ id + '&proximas=1');
    }
}