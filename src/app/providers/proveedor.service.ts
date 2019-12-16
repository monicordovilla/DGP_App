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
    var tipo=1;
    if(esSocio)
      tipo=0;

    return this.http.get('http://localhost:3000/actividades/apuntado?id_part='+ id_part + '&id_act=' + id_act + '&tipo=' + tipo);
  }

  apuntarse(postData, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://localhost:3000/actividades/participar?tipo=" + tipo, JSON.stringify(postData), httpOptions);
  }

  desapuntarse(postData, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(postData));
    return this.http.post("http://localhost:3000/actividades/eliminarParticipacion?tipo="+ tipo, JSON.stringify(postData), httpOptions);
  }

  misActividadesRealizadas(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get('http://localhost:3000/actividades/misActividades?id='+ id + '&proximas=0&tipo=' + tipo);
  }
  misActividadesProximas(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get('http://localhost:3000/actividades/misActividades?id='+ id + '&proximas=1&tipo=' + tipo);
    }

  buscarActividades(valor, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get('http://localhost:3000/actividades/buscarActividad' + '?valor='+ valor + '&tipo=' + tipo);
  }

  obtenerMisCategorias(id): Observable<any>{
      return this.http.get('http://localhost:3000/actividades/misCategorias?id='+ id); 
  }
}