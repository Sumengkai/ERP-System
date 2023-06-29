import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreate } from './EmployeeCreate.component';

describe('EmployeeCreate', () => {
  let component: EmployeeCreate;
  let fixture: ComponentFixture<EmployeeCreate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCreate]
    });
    fixture = TestBed.createComponent(EmployeeCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});