import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alternativa, AlternativaService, DataService, Kriterijum, MatricaService } from 'ahp-library';

@Component({
  selector: 'app-unos-alternativa',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './unos-alternativa.html',
  styleUrl: './unos-alternativa.css',
})
export class UnosAlternativa implements OnInit{
  alternativaForm!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.alternativaForm = this.fb.group({
      nameAlternativa: this.fb.control('', Validators.required),
      kriterijumi: this.fb.array([this.fb.control('', Validators.required)])
    })
    for(let i =0; i<this.listaKriterijuma().length; i++){
      this.dodajKriterijum()
    }
  } 

private matricaS = inject(MatricaService)
private dataS = inject(DataService)
private alternativaS = inject(AlternativaService)

listaKriterijuma = this.dataS.listaKriterjuma;
listaAlternativa = this.alternativaS.listaAlternativa;


  dodajKriterijum():void{
    this.kriterijumi.push(this.fb.control(''));
  }

  spremiAlternativu():void{
    const kriterijumiPom : Kriterijum[] = []
    for(let i=0; i<this.listaKriterijuma().length; i++){
      kriterijumiPom[i]= {
        kriterijumKoristi:this.listaKriterijuma()[i].kriterijumKoristi,
        name: this.listaKriterijuma()[i].name,
        value: this.kriterijumi.at(i).value
      }
    }
    const alternativa: Alternativa = {
      name: this.nameAlternativa?.value,
      kriterijumi: kriterijumiPom
    }
    this.alternativaS.dodajeAlternativu(alternativa)
  }

  deleteAlternativa(index: number){
    this.alternativaS.deleteAlternativa(index);
  }

   get kriterijumi():FormArray{
    return this.alternativaForm.get('kriterijumi')as FormArray;
  }

  get nameAlternativa(){
    return this.alternativaForm.get('nameAlternativa')
  }

}
