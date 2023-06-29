import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSearch } from './ShippingSearch.component';

describe('ShippingSearch', () => {
  let component: ShippingSearch;
  let fixture: ComponentFixture<ShippingSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingSearch]
    });
    fixture = TestBed.createComponent(ShippingSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});