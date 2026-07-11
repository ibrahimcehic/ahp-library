import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricaKriterijuma } from './matrica-kriterijuma';

describe('MatricaKriterijuma', () => {
  let component: MatricaKriterijuma;
  let fixture: ComponentFixture<MatricaKriterijuma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatricaKriterijuma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatricaKriterijuma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
