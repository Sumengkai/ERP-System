import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSearch } from './PurchaseSearch.component';

describe('PurchaseSearch', () => {
  let component: PurchaseSearch;
  let fixture: ComponentFixture<PurchaseSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseSearch]
    });
    fixture = TestBed.createComponent(PurchaseSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});