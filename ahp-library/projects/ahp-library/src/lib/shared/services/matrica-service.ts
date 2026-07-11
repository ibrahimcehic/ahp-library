import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatricaService {
  testFcn(){
    console.log("Ispis testne funkcije iz servisa biblioteke!")
  }
}
