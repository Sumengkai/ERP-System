import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCreate } from './StockCreate.component';

describe('StockCreate', () => {
  let component: StockCreate;
  let fixture: ComponentFixture<StockCreate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCreate]
    });
    fixture = TestBed.createComponent(StockCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});