import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'ahp-library';

@Component({
  selector: 'app-unos-kriterijuma',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './unos-kriterijuma.html',
  styleUrl: './unos-kriterijuma.css',
})
export class UnosKriterijuma{
  
  private fb = inject(FormBuilder);
  private dataS = inject(DataService);

  kriterijumForm: FormGroup = this.fb.group({
    nazivKriterijuma: new FormControl(''),
    kriterijumKoristi: new FormControl(true),
  });

  kriterijumiIzServisa = this.dataS.listaKriterjuma
  nazivProjekta = this.dataS.nazivProjekta;

  dodajKriterijum() {
      this.dataS.dodajKriterijum({
        name: this.nazivKriterijuma?.value,
        kriterijumKoristi: this.kriterijumKoristi?.value
      });
      
  }

  deleteKriterijum(index:number) {
    this.dataS.deleteKriterijum(index)
  }

  setImeProjekta(e: Event){
  const element = e?.target as HTMLInputElement;
   this.dataS.setNazivProjekta(element.value)
  }

  get nazivKriterijuma() {
    return this.kriterijumForm.get('nazivKriterijuma');
  }
  get kriterijumKoristi() {
    return this.kriterijumForm.get('kriterijumKoristi');
  }
}
