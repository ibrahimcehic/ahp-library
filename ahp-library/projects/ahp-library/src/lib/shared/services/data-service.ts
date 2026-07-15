import { inject, Injectable, signal } from '@angular/core';
import { Kriterijum } from '../models/kriterijum';
import { MatricaService } from './matrica-service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
private matricaS = inject(MatricaService)

 private _listaKriterijuma = signal<Kriterijum[]>([]);
 private _nazivProjekta = signal<string>('');

 public listaKriterjuma = this._listaKriterijuma.asReadonly();
 public nazivProjekta = this._nazivProjekta.asReadonly();

 dodajKriterijum(noviKr: Kriterijum){
  this._listaKriterijuma.update(trenutni => [...trenutni, noviKr]);
  this.matricaS.inicijalizacijaMatriceKriterijuma(this.listaKriterjuma().length)
  this.matricaS.inicijalizacijaNormaliziraneMatrice(this.listaKriterjuma().length)
 }
 
 deleteKriterijum(indexZaBrisanje:number){
  this._listaKriterijuma.update(trenutniNiz => trenutniNiz.filter((_,index) => index !== indexZaBrisanje))
   this.matricaS.inicijalizacijaMatriceKriterijuma(this.listaKriterjuma().length)
   this.matricaS.inicijalizacijaNormaliziraneMatrice(this.listaKriterjuma().length)
 }

 setNazivProjekta(naziv: string){
  this._nazivProjekta.set(naziv)
 }

}
