import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCreate } from './ShippingCreate.component';

describe('ShippingCreate', () => {
  let component: ShippingCreate;
  let fixture: ComponentFixture<ShippingCreate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingCreate]
    });
    fixture = TestBed.createComponent(ShippingCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});