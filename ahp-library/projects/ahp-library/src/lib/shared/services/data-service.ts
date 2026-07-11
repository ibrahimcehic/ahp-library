import { Injectable, signal } from '@angular/core';
import { Kriterijum } from '../models/kriterijum';

@Injectable({
  providedIn: 'root',
})
export class DataService {
 private _listaKriterijuma = signal<Kriterijum[]>([]);
 public listaKriterjuma = this._listaKriterijuma.asReadonly();

 dodajKriterijum(noviKr: Kriterijum){
  this._listaKriterijuma.update(trenutni => [...trenutni, noviKr]);
  console.log("Poziva se funkcija u servisu: ", noviKr)
 }
 
 deleteKriterijum(indexZaBrisanje:number){
  this._listaKriterijuma.update(trenutniNiz => trenutniNiz.filter((_,index) => index !== indexZaBrisanje))
 }

}
