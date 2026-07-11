import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhpLibrary } from './ahp-library';

describe('AhpLibrary', () => {
  let component: AhpLibrary;
  let fixture: ComponentFixture<AhpLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhpLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhpLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
