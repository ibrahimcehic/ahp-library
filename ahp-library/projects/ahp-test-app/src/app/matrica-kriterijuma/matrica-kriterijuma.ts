import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService, MatricaService } from 'ahp-library';

@Component({
  selector: 'app-matrica-kriterijuma',
  imports: [FormsModule, CommonModule],
  templateUrl: './matrica-kriterijuma.html',
  styleUrl: './matrica-kriterijuma.css',
})
export class MatricaKriterijuma {
  private dataS = inject(DataService);
  private matricaS = inject(MatricaService);

  listaKriterijuma = this.dataS.listaKriterjuma;
  matricaKriterijuma = this.matricaS.matricaKriterijuma;
  sumaKolona = this.matricaS.sumaKolona;

  proracunElemenataIspodDijagonale(i: number, j: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.matricaS.updatePoljaMatrice(i, j, Number(inputElement.value));
    this.matricaS.proracunElemenataIspodDijagonale(i, j);
  }
}
