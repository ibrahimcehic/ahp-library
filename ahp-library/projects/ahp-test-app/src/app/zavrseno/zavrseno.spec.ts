import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zavrseno } from './zavrseno';

describe('Zavrseno', () => {
  let component: Zavrseno;
  let fixture: ComponentFixture<Zavrseno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zavrseno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zavrseno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
