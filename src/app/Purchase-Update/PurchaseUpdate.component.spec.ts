import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseUpdate } from './PurchaseUpdate.component';

describe('PurchaseUpdate', () => {
  let component: PurchaseUpdate;
  let fixture: ComponentFixture<PurchaseUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseUpdate]
    });
    fixture = TestBed.createComponent(PurchaseUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});