import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdate } from './EmployeeUpdate.component';

describe('EmployeeUpdate', () => {
  let component: EmployeeUpdate;
  let fixture: ComponentFixture<EmployeeUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeUpdate]
    });
    fixture = TestBed.createComponent(EmployeeUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});