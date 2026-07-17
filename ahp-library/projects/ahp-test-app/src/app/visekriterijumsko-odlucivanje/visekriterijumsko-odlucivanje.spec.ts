import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisekriterijumskoOdlucivanje } from './visekriterijumsko-odlucivanje';

describe('VisekriterijumskoOdlucivanje', () => {
  let component: VisekriterijumskoOdlucivanje;
  let fixture: ComponentFixture<VisekriterijumskoOdlucivanje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisekriterijumskoOdlucivanje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisekriterijumskoOdlucivanje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
