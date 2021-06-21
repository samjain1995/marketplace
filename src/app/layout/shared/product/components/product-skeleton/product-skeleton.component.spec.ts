import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSkeletonComponent } from './product-skeleton.component';

describe('ProductSkeletonComponent', () => {
  let component: ProductSkeletonComponent;
  let fixture: ComponentFixture<ProductSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
