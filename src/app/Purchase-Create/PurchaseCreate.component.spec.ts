import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCreate } from './PurchaseCreate.component';

describe('PurchaseCreate', () => {
  let component: PurchaseCreate;
  let fixture: ComponentFixture<PurchaseCreate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseCreate]
    });
    fixture = TestBed.createComponent(PurchaseCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});