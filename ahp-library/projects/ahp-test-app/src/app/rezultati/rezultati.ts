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
sortiranoUzlazno: boolean = true;

sortirajPoProsjeku(){
  this.sortiranoUzlazno = !this.sortiranoUzlazno
  this.listaAlternativa.sort((a,b) => {
    const vrijednostA = Number(a.value) || 0
    const vrijednostB = Number(b.value) || 0

    if(this.sortiranoUzlazno){
      return vrijednostA - vrijednostB
    }else {
      return vrijednostB - vrijednostA
    }
  })
}

test(){
  console.log("Ispis alternativa liste: ", this.alternativaS.listaAlternativa())
  console.log("Ispis kriterijuma liste: ", this.alternativaS.listaKriterijuma)
  console.log("Ispis prosjecne vrijednosti liste: ", this.alternativaS.tezinskiVektor)
}
}
