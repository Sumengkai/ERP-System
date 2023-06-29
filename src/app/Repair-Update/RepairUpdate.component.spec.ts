import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairUpdate } from './RepairUpdate.component';

describe('RepairUpdate', () => {
  let component: RepairUpdate;
  let fixture: ComponentFixture<RepairUpdate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairUpdate]
    });
    fixture = TestBed.createComponent(RepairUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});