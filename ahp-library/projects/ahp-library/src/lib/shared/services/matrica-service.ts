import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatricaService {
  private _matricaKriterijuma = signal<number[][]>([]);
  private _sumaKolona = signal<number[]>([]);
  private _matricaKriterijumaNormalizirana = signal<number[][]>([]);
  private _prosjecnaVrijednostKriterijuma = signal<number[]>([]);

  matricaKriterijuma = this._matricaKriterijuma.asReadonly();
  sumaKolona = this._sumaKolona.asReadonly();
  matricaKriterijumaNormalizirana = this._matricaKriterijumaNormalizirana.asReadonly();
  prosjecnaVrijednostKriterijuma = this._prosjecnaVrijednostKriterijuma.asReadonly();

  inicijalizacijaMatriceKriterijuma(length: number) {
    const novaMatrica: number[][] = [];
    for (let i = 0; i < length; i++) {
      novaMatrica[i] = [];
      for (let j = 0; j < length; j++) {
        novaMatrica[i][j] = 1;
      }
    }
    this._matricaKriterijuma.set(novaMatrica);
    this.inicijalizacijaSumeKolona();
    this.inicijalizacijaNormaliziraneMatrice(this.matricaKriterijuma.length);
  }

  inicijalizacijaNormaliziraneMatrice(length: number) {
    const novaMatrica: number[][] = [];
    for (let i = 0; i < length; i++) {
      novaMatrica[i] = [];
      for (let j = 0; j < length; j++) {
        novaMatrica[i][j] = 1;
      }
    }
    this._matricaKriterijumaNormalizirana.set(novaMatrica);
  }

  inicijalizacijaSumeKolona() {
    const newArray: number[] = [];
    for (let i = 0; i < this._matricaKriterijuma().length; i++) {
      newArray.push(0);
    }
    this._sumaKolona.set(newArray);
  }

  updateSumaKolona(index: number, newValue: number) {
    this._sumaKolona.update((trenutniNiz) =>
      trenutniNiz.map((element, i) => (i === index ? newValue : element)),
    );
  }

  updatePoljaMatrice(i: number, j: number, newValue: number) {
    this._matricaKriterijuma.update((trenutnaMatrica) => {
      const novaMatrica = trenutnaMatrica.map((r) => [...r]);
      novaMatrica[i][j] = newValue;
      return novaMatrica;
    });
  }

  updateNormaliziraneMatrice(i: number, j: number, value: number) {
    this._matricaKriterijumaNormalizirana.update((trenutnaMatrica) => {
      const novaMatrica = trenutnaMatrica.map((r) => [...r]);
      novaMatrica[i][j] = value;
      return novaMatrica;
    });
  }

  proracunElemenataIspodDijagonale(i: number, j: number) {
    this._matricaKriterijuma.update((trenutnaMatrica) => {
      const novaMatrica = trenutnaMatrica.map((red) => [...red]);
      novaMatrica[j][i] = parseFloat((1 / novaMatrica[i][j]).toFixed(3));
      return novaMatrica;
    });
    this.izracunajSumuKolona();
  }

  izracunajSumuKolona() {
    this.inicijalizacijaSumeKolona();
    let sumaPom: number = 0;
    for (let i = 0; i < this._matricaKriterijuma().length; i++) {
      sumaPom = 0;
      for (let j = 0; j < this._matricaKriterijuma().length; j++) {
        sumaPom += this._matricaKriterijuma()[j][i];
        sumaPom = parseFloat(sumaPom.toFixed(4));
        this.updateSumaKolona(i, sumaPom);
      }
    }
  }

  normalizovanaMatrica = computed<number[][]>(() => {
    const matrica = this._matricaKriterijuma();
    const n = matrica.length;
    if (n === 0) return [];

    const novaNormalizovanaMatrica: number[][] = [];
    for (let i = 0; i < n; i++) {
      novaNormalizovanaMatrica[i] = [];
      for (let j = 0; j < n; j++) {
        const suma = this.sumaKolona()[j];
        novaNormalizovanaMatrica[i][j] = suma !== 0 ? matrica[i][j] / suma : 0;
      }
    }
    return novaNormalizovanaMatrica;
  });

  tezinskiVektor = computed<number[]>(() => {
    const normalizovana = this.normalizovanaMatrica();
    const n = normalizovana.length;
    if (n === 0) return [];

    return normalizovana.map((red) => {
      const sumaReda = red.reduce((acc, vrijednost) => acc + vrijednost, 0);
      return sumaReda / n;
    });
  });

  //odredjivanje lambdamax
  pocetnaMatricaPutaVektorTezina = computed<number[]>(() => {
    const n = this.matricaKriterijuma().length;
    const listaLambdaMax: number[] = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        listaLambdaMax[i] += this.matricaKriterijuma()[i][j] * this.tezinskiVektor()[j];
      }
    }
    return listaLambdaMax;
  });

  lambdaMax = computed<number>(() => {
    const n = this.pocetnaMatricaPutaVektorTezina().length;
    if(n === 0 )return 0
    const y = this.pocetnaMatricaPutaVektorTezina();
    const w = this.tezinskiVektor()
    let sumaOmjera = 0;
    for (let i = 0; i < n; i++) {
      if(w[i] !=0){
        sumaOmjera += y[i]/w[i]
      }
    }
    return sumaOmjera / n;
  });

indeksKoenzistencijeCI = computed<number>(()=>{
   const n = this.pocetnaMatricaPutaVektorTezina().length;
   if(n<=0) return 0;
   return (this.lambdaMax()-n)/(n-1)

})

omjerKonzistencijeCR = computed<number>(()=>{
  return this.indeksKoenzistencijeCI()/this.randomIndex()
})

// RI index 
randomIndex = computed <number>(()=>{
  switch (this.matricaKriterijuma().length){
     case 1:
      case 2:  return 0.00;
      case 3:  return 0.58;
      case 4:  return 0.90;
      case 5:  return 1.12;
      case 6:  return 1.24;
      case 7:  return 1.32;
      case 8:  return 1.41;
      case 9:  return 1.45;
      case 10: return 1.49;
      default: return -1; // Fallback for unsupported sizes
  }
})
}


