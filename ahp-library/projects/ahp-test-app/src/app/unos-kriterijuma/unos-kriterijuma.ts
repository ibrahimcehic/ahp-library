import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService, Kriterijum } from 'ahp-library';

@Component({
  selector: 'app-unos-kriterijuma',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './unos-kriterijuma.html',
  styleUrl: './unos-kriterijuma.css',
})
export class UnosKriterijuma implements OnInit{
  ngOnInit(): void {
    this.kriterijumiIzServisa =this.dataS.listaKriterjuma();
  }
  private fb = inject(FormBuilder);
  private dataS = inject(DataService);

  kriterijumForm: FormGroup = this.fb.group({
    nazivKriterijuma: new FormControl(''),
    kriterijumKoristi: new FormControl(true),
  });

  kriterijumiIzServisa: Kriterijum[]=[];

  dodajKriterijum() {
      this.dataS.dodajKriterijum({
        name: this.nazivKriterijuma?.value,
        kriterijumKoristi: this.kriterijumKoristi?.value
      });
      this.kriterijumiIzServisa =this.dataS.listaKriterjuma();
  }

  deleteKriterijum(index:number) {
    this.dataS.deleteKriterijum(index)
    this.kriterijumiIzServisa =this.dataS.listaKriterjuma();
  }

  test(){
    console.log("ispis liste kriterijuma iz servisa: ",this.kriterijumiIzServisa)
  }

  get nazivKriterijuma() {
    return this.kriterijumForm.get('nazivKriterijuma');
  }
  get kriterijumKoristi() {
    return this.kriterijumForm.get('kriterijumKoristi');
  }
}
