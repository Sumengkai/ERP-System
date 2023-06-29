import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSearch } from './InvoiceSearch.component';

describe('InvoiceSearch', () => {
  let component: InvoiceSearch;
  let fixture: ComponentFixture<InvoiceSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceSearch]
    });
    fixture = TestBed.createComponent(InvoiceSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});