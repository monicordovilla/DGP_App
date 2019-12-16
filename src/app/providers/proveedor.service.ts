import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  ip = "http://localhost:3000"

  obtenerActividades(): Observable<any>{
    return this.http.get(this.ip + '/actividades');
  }

  obtenerActividadesRecomendadas(id, esSocio): Observable<any> {
    var consulta="recomendadasVoluntario";
    if(esSocio)
      consulta="recomendadasSocio";
    return this.http.get(this.ip + '/actividades/' + consulta + "?id=" + id);
  }

  obtenerActividad(i): Observable<any>{
    return this.http.get(this.ip + '/actividades?id='+ i);
  }

  obtenerCategorias(): Observable<any>{
    return this.http.get(this.ip + '/actividades/categorias');
  }

  obtenerCategoriasActividad(i): Observable<any>{
    return this.http.get(this.ip + '/actividades/categoriasDeActividad?id='+i);
  }

  apuntadoActividad(id_part, id_act, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

    return this.http.get(this.ip + '/actividades//apuntado?id_part='+ id_part + '&id_act=' + id_act + '&tipo=' + tipo);
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
    return this.http.post(this.ip + "/actividades/participar?tipo=" + tipo, JSON.stringify(postData), httpOptions);
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
    return this.http.post(this.ip + "3000/actividades/eliminarParticipacion?tipo="+ tipo, JSON.stringify(postData), httpOptions);
  }

  enviarLogin(postData): Observable<any>{// Http Options
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      console.log(JSON.stringify(postData));
      return this.http.post(this.ip + '/usuarios/loginApp', JSON.stringify(postData), httpOptions);
  }

  misActividadesRealizadas(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get(this.ip + '/actividades/misActividades?id='+ id + '&proximas=0&tipo=' + tipo);
  }
  misActividadesProximas(id, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get(this.ip + '/actividades/' + consulta + '?id='+ id + '&proximas=1');
    }

  buscarActividades(valor, esSocio): Observable<any>{
    var tipo=1;
    if(esSocio)
      tipo=0;

      return this.http.get(this.ip + '/actividades/buscarActividad' + '?valor='+ valor + '&tipo=' + tipo);
  }

  obtenerMisCategorias(id): Observable<any>{
      return this.http.get(this.ip + '/actividades/misCategorias?id='+ id); 
  }
}