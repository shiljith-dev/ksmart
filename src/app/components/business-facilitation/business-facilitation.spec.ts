import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFacilitation } from './business-facilitation';

describe('BusinessFacilitation', () => {
  let component: BusinessFacilitation;
  let fixture: ComponentFixture<BusinessFacilitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessFacilitation],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessFacilitation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
