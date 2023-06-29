import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearch } from './StockSearch.component';

describe('StockSearch', () => {
  let component: StockSearch;
  let fixture: ComponentFixture<StockSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockSearch]
    });
    fixture = TestBed.createComponent(StockSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});