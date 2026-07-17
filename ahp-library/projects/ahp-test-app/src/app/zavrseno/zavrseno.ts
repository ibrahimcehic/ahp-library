import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlternativaService, DataService, MatricaService } from 'ahp-library';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-zavrseno',
  imports: [CommonModule, RouterLink],
  templateUrl: './zavrseno.html',
  styleUrl: './zavrseno.css',
})
export class Zavrseno {
  private dataS = inject(DataService)
  private alternativS = inject(AlternativaService)
  private matricaS = inject(MatricaService)

  listaKriterijuma = this.dataS.listaKriterjuma()
listaAlternativa = this.alternativS.listaAlternativaSaVrijednostima()
tezinskiVektor = this.matricaS.tezinskiVektor()
currentDate = new Date()
projectName = this.dataS.nazivProjekta;
indeksKonzistentnostiCR = this.matricaS.omjerKonzistencijeCR()

test(){
  console.log("ispis naziva projekta:", this.dataS.nazivProjekta())
}
}
