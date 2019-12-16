import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProveedorService {

  constructor(public http:HttpClient) { }

  ip = "http://192.168.102.3:3000"

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
    var consulta="apuntadoVoluntario";
    if(esSocio)
      consulta="apuntadoSocio";

    return this.http.get(this.ip + '/actividades/' + consulta + '?id_part='+ id_part + '&id_act=' + id_act);
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
    return this.http.post(this.ip + "actividades/" + consulta, JSON.stringify(postData), httpOptions);
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
    return this.http.post(this.ip + '/actividades' + consulta, JSON.stringify(postData), httpOptions);
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
    var consulta="misActividadesVoluntario";
    if(esSocio)
      consulta="misActividadesSocio";

      return this.http.get(this.ip + '/actividades/' + consulta + '?id='+ id +  '&proximas=0');
  }
  misActividadesProximas(id, esSocio): Observable<any>{
    var consulta="misActividadesVoluntario";
    if(esSocio)
      consulta="misActividadesSocio";

      return this.http.get(this.ip + '/actividades/' + consulta + '?id='+ id + '&proximas=1');
    }
}
