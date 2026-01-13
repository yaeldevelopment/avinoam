import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeServicesComponent } from './office-services.component';

describe('OfficeServicesComponent', () => {
  let component: OfficeServicesComponent;
  let fixture: ComponentFixture<OfficeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
