import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUpdate } from './InvoiceUpdate.component';

describe('InvoiceUpdate', () => {
  let component: InvoiceUpdate;
  let fixture: ComponentFixture<InvoiceUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceUpdate]
    });
    fixture = TestBed.createComponent(InvoiceUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});