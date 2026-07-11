import { Component, inject, OnInit } from '@angular/core';
import { DataService, Kriterijum, MatricaService } from 'ahp-library';

@Component({
  selector: 'app-matrica-kriterijuma',
  imports: [],
  templateUrl: './matrica-kriterijuma.html',
  styleUrl: './matrica-kriterijuma.css',
})
export class MatricaKriterijuma implements OnInit{
  ngOnInit(): void {
    this.listaKriterijuma = this.dataS.listaKriterjuma()
  }
private dataS = inject(DataService)
private matricaS = inject(MatricaService)

listaKriterijuma: Kriterijum[]=[];
matricaKriterijuma: Kriterijum[][] = [];

}
