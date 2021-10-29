import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService { 


  public info: InfoPagina={};
  public equipo:any[]=[];

  constructor(private http:HttpClient){
    console.log('servicio de la pagina listo');

    this.cargarInfo();
    this.cargarEquipo();
  }
private cargarInfo(){
  this.http.get('assets/data/info-pagina.json')
  .subscribe((resp:InfoPagina)=>{
    console.log(resp);
    this.info=resp;
  });
}

private cargarEquipo(){
  this.http.get('https://precticaangular-default-rtdb.firebaseio.com/equipo.json')
   .subscribe((resp:any)=>{
     console.log(resp);
     this.equipo=resp;
   })
}
}



  

