import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginERPComponent } from './login-erp.component';

describe('LoginERPComponent', () => {
  let component: LoginERPComponent;
  let fixture: ComponentFixture<LoginERPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginERPComponent]
    });
    fixture = TestBed.createComponent(LoginERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
