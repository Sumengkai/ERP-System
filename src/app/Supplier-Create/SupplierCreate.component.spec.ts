import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCreate } from './SupplierCreate.component';

describe('SupplierCreate', () => {
  let component: SupplierCreate;
  let fixture: ComponentFixture<SupplierCreate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierCreate]
    });
    fixture = TestBed.createComponent(SupplierCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});