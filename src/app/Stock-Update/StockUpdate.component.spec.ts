import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUpdate } from './StockUpdate.component';

describe('StockUpdate', () => {
  let component: StockUpdate;
  let fixture: ComponentFixture<StockUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockUpdate]
    });
    fixture = TestBed.createComponent(StockUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});