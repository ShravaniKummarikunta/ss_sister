import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelComponent } from './parcel';

describe('Parcel', () => {
  let component: ParcelComponent;
  let fixture: ComponentFixture<ParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
