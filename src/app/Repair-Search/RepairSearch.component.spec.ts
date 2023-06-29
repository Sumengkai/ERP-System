import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairSearch } from './RepairSearch.component';

describe('RepairSearch', () => {
  let component: RepairSearch;
  let fixture: ComponentFixture<RepairSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairSearch]
    });
    fixture = TestBed.createComponent(RepairSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});