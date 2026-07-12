import { Component, inject } from '@angular/core';
import { DataService, MatricaService } from 'ahp-library';

@Component({
  selector: 'app-normalizacija-matrice',
  imports: [],
  templateUrl: './normalizacija-matrice.html',
  styleUrl: './normalizacija-matrice.css',
})
export class NormalizacijaMatrice{
  
  private matricaS = inject(MatricaService)
  private dataS = inject(DataService)

kriterijumi = this.dataS.listaKriterjuma;
normaliziranaMatrica = this.matricaS.normalizovanaMatrica
prosjecnaVrijednost = this.matricaS.prosjecnaVrijednostKriterijuma
tezinskiVektor = this.matricaS.tezinskiVektor
}
