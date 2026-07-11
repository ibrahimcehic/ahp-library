import { Component, inject } from '@angular/core';
import {MatricaService} from 'ahp-library';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
private matricaS = inject(MatricaService)

  test(){
    this.matricaS.testFcn()
  }
}
