import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizacijaMatrice } from './normalizacija-matrice';

describe('NormalizacijaMatrice', () => {
  let component: NormalizacijaMatrice;
  let fixture: ComponentFixture<NormalizacijaMatrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalizacijaMatrice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalizacijaMatrice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
