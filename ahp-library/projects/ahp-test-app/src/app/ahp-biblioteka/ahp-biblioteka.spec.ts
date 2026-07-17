import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhpBiblioteka } from './ahp-biblioteka';

describe('AhpBiblioteka', () => {
  let component: AhpBiblioteka;
  let fixture: ComponentFixture<AhpBiblioteka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhpBiblioteka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhpBiblioteka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
