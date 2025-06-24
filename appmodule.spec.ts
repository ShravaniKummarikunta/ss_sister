import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './appmodule';

describe('Appmodule', () => {
  let component: AppModule;
  let fixture: ComponentFixture<AppModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
