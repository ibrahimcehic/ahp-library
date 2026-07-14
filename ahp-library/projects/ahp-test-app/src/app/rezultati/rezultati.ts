import { Component, inject } from '@angular/core';
import { AlternativaService } from 'ahp-library';

@Component({
  selector: 'app-rezultati',
  imports: [],
  templateUrl: './rezultati.html',
  styleUrl: './rezultati.css',
})
export class Rezultati {
private alternativaS = inject(AlternativaService)
listaKriterijuma = this.alternativaS.listaKriterijuma
listaAlternativa = this.alternativaS.listaAlternativaSaVrijednostima()

test(){
  console.log("Ispis alternativa liste: ", this.alternativaS.listaAlternativa())
  console.log("Ispis kriterijuma liste: ", this.alternativaS.listaKriterijuma)
  console.log("Ispis prosjecne vrijednosti liste: ", this.alternativaS.tezinskiVektor)
}
}
