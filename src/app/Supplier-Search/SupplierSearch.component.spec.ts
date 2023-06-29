import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSearch } from './SupplierSearch.component';

describe('SupplierSearch', () => {
  let component: SupplierSearch;
  let fixture: ComponentFixture<SupplierSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierSearch]
    });
    fixture = TestBed.createComponent(SupplierSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});