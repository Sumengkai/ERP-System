import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierUpdate } from './SupplierUpdate.component';

describe('SupplierUpdate', () => {
  let component: SupplierUpdate;
  let fixture: ComponentFixture<SupplierUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierUpdate]
    });
    fixture = TestBed.createComponent(SupplierUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});