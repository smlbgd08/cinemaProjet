import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient, HttpHeaders } from '@angular/common/http';
import { Ville } from '../model/ville';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class VilleService {

   httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  public host : string = "http://localhost:80/";

  constructor(private http : HttpClient ) { }


  public getAllVile(url){
    
    return this.http.get(this.host+url);
  }


}
