import { computed, inject, Injectable, signal } from '@angular/core';
import { Alternativa } from '../models/alternativa';
import { DataService } from './data-service';
import { MatricaService } from './matrica-service';

@Injectable({
  providedIn: 'root',
})
export class AlternativaService {
  private dataS = inject(DataService)
  private matricaS = inject(MatricaService)

  private _listaAlternativa = signal<Alternativa[]>([])

  listaAlternativa = this._listaAlternativa.asReadonly();
  listaKriterijuma = this.dataS.listaKriterjuma()
  tezinskiVektor = this.matricaS.tezinskiVektor();

  dodajeAlternativu(novaAlternativa: Alternativa){
   this._listaAlternativa.update(trenutni => [...trenutni, novaAlternativa])
  }

  deleteAlternativa(i:number){
    this._listaAlternativa.update(trenutnaLista => trenutnaLista.filter((_,index) => index !== i))
  }

   listaAlternativaSaVrijednostima = computed<Alternativa[]>(()=>{
    const lista :Alternativa[] = JSON.parse(JSON.stringify(this.listaAlternativa()))
    const n = lista.length;

    if(n===0)return []

    const m = this.listaKriterijuma.length

    for(let i = 0; i<n;i++){
      for(let j=0; j<m; j++){
       const kriterijum = lista[i]?.kriterijumi?.[j];
       if(kriterijum){
        const kriterijKoristiPom = kriterijum.kriterijumKoristi;
        const currentValue = kriterijum.value ?? 1; 
         const reciprocnaValue = 1/(currentValue ?? 1);
kriterijum.value = this.tezinskiVektor[j] * (kriterijKoristiPom ? currentValue : reciprocnaValue)
       }
      }
    }
    return lista
  }) 
}
