import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {
url='/api';

  constructor(private http:HttpClient) { }


//get maquinas

getMaquinas()
{
  return this.http.get(this.url);
}

// get una maquina
getUnMaquina(id:string){
  return this.http.get(this.url+'/'+id);
}


//post maquina

addMaquina(maquina:Maquina){
  return this.http.post(this.url, maquina);
}

//eliminar
deleteMaquina(id:string){
return this.http.delete(this.url+'/'+ id);
}
//modificar maquina
editMaquina(id:string, maquina: Maquina){
  return this.http.put(this.url+'/'+id, maquina);
}

}

export interface Maquina{
  id?:string;
  nombre?:string;
  descripcion?:string;
  marca?:string;
  garantia?:string;
  estado?:string;
}

