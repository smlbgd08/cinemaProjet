import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host : string = "http://localhost:80/";
  constructor(private http : HttpClient) { }
 

  public getAllCinemaByVille(url){
   
    return this.http.get(url);
  }

  public getSalleByCinema(url){
   
    return this.http.get(url);
  }

  public getProjectionBySalle(salle){
   let url = salle._links.projections.href.replace("{?projection}","");
       return this.http.get(url+"?projection=p1");
  }

  public getTicketPlaces(p){
    console.log("************************************");
    console.log(p);
    let url = p._links.tickets.href.replace("{?projection}","");
    return this.http.get(url+"?projection=ticketProj");

  }

}
