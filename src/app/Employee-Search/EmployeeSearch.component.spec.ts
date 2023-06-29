import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearch } from './EmployeeSearch.component';

describe('EmployeeSearch', () => {
  let component: EmployeeSearch;
  let fixture: ComponentFixture<EmployeeSearch>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSearch]
    });
    fixture = TestBed.createComponent(EmployeeSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});