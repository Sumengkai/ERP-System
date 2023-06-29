import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderERPComponent } from './header-erp.component';

describe('HeaderERPComponent', () => {
  let component: HeaderERPComponent;
  let fixture: ComponentFixture<HeaderERPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderERPComponent]
    });
    fixture = TestBed.createComponent(HeaderERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
