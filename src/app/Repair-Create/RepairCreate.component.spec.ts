import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCreate } from './RepairCreate.component';

describe('RepairCreate', () => {
  let component: RepairCreate;
  let fixture: ComponentFixture<RepairCreate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairCreate]
    });
    fixture = TestBed.createComponent(RepairCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});