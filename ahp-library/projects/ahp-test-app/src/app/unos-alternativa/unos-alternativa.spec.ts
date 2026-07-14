import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosAlternativa } from './unos-alternativa';

describe('UnosAlternativa', () => {
  let component: UnosAlternativa;
  let fixture: ComponentFixture<UnosAlternativa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnosAlternativa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosAlternativa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
