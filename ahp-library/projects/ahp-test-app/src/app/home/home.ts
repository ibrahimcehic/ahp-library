import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatricaService} from 'ahp-library';
import { UnosKriterijuma } from "../unos-kriterijuma/unos-kriterijuma";
import { MatricaKriterijuma } from "../matrica-kriterijuma/matrica-kriterijuma";
import { NormalizacijaMatrice } from "../normalizacija-matrice/normalizacija-matrice";
import { UnosAlternativa } from '../unos-alternativa/unos-alternativa';
import { Rezultati } from "../rezultati/rezultati";

@Component({
  selector: 'app-home',
  imports: [NgClass, UnosKriterijuma, MatricaKriterijuma, NormalizacijaMatrice, UnosAlternativa, Rezultati],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  ngOnInit(): void {
   this.activeSteper = 0;
  }
private matricaS = inject(MatricaService)
activeSteper: number=0;

  stepperCommands(step:string){
    if(step == 'prev' && this.activeSteper>0){
      this.activeSteper--;
    }else if(step == 'next' && this.activeSteper<5){
      this.activeSteper++;
    }
  }

  getStepClass(id:number){
    if(id === this.activeSteper){
      return 'bg-primary text-white  border border-4 border-primary-subtle shadow'
    } else if(this.activeSteper>id){
      return 'bg-primary text-white  shadow-sm'
    }
    else if (this.activeSteper<id){
      return 'bg-secondary-subtle text-muted  border'
    }
    else{
      return ''
    }
  }

   getStepClassTitle(id:number){
    if(id === this.activeSteper){
      return 'mt-2 mb-0 small d-none d-md-block fw-bold text-dark '
    } else if(this.activeSteper>id){
      return 'mt-2 mb-0 small d-none d-md-block fw-semibold text-primary'
    }
    else if (this.activeSteper<id){
      return 'mt-2 mb-0 small d-none d-md-block text-muted '
    }
    else{
      return ''
    }
  }

  getParagraphClass(stepIndex: number): string {

  const baseClasses = 'mt-2 mb-0 small d-none d-md-block';

  if (this.activeSteper === stepIndex) {
    // Trenutno aktivan korak
    return `${baseClasses} fw-bold text-dark`;
  } else if (this.activeSteper > stepIndex) {
    // Završen korak
    return `${baseClasses} fw-semibold text-primary`;
  } else {
    // Korak na čekanju
    return `${baseClasses} text-muted`;
  }
}
}
