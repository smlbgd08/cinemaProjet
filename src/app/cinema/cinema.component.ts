import { Component, OnInit } from '@angular/core';
import { VilleService } from '../services/ville.service';
import { HttpHeaders } from '@angular/common/http';
import { Ville } from '../model/ville';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

 public villes ;
 public cinemas ;
 public salles ;
 public currentVille ; currentCenima; currenProjections :any;
  constructor(private villeService : VilleService , public cinemaService : CinemaService) { }

  ngOnInit(): void {
   this.getAllVilles()
  }


public getAllVilles()
{
 
  this.villeService.getAllVile("villes").subscribe(data=>{
  this.villes = data;
    console.log(this.villes)
  },err=>{

  });
}

getCinemaByVille(v)
{
  this.salles = null;
  console.log(v._links.cinemas)
  return this.cinemaService.getAllCinemaByVille(v._links.cinemas.href).subscribe(data=>{
    console.log(data);
    this.currentVille = v;
    this.cinemas =data;
  });
}

getSalleByCinema(cn){
  return this.cinemaService.getAllCinemaByVille(cn._links.salles.href).subscribe(data=>{
    this.currentCenima = cn;
    this.salles =data;
    this.salles._embedded.salles.forEach(salle =>{
      this.cinemaService.getProjectionBySalle(salle).subscribe(data=>{
      salle.projections = data;
      });
    });
  });

  console.log("all data projection ***************")
  console.log(this.salles)

}

onGetTicketPlace(pr){
  console.log(pr);
  this.currenProjections = pr ; 
  this.cinemaService.getTicketPlaces(pr).subscribe(data => {
    this.currenProjections.tickets = data ; 
  });
}


}
