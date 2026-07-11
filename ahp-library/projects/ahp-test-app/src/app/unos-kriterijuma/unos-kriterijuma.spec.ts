import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosKriterijuma } from './unos-kriterijuma';

describe('UnosKriterijuma', () => {
  let component: UnosKriterijuma;
  let fixture: ComponentFixture<UnosKriterijuma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnosKriterijuma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnosKriterijuma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
