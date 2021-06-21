import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionUploadComponent } from './prescription-upload.component';

describe('PrescriptionUploadComponent', () => {
  let component: PrescriptionUploadComponent;
  let fixture: ComponentFixture<PrescriptionUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
