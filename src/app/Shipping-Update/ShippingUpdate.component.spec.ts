import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingUpdate } from './ShippingUpdate.component';

describe('ShippingUpdate', () => {
  let component: ShippingUpdate;
  let fixture: ComponentFixture<ShippingUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingUpdate]
    });
    fixture = TestBed.createComponent(ShippingUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});