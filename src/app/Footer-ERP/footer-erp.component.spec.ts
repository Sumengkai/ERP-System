import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterERPComponent } from './footer-erp.component';

describe('FooterERPComponent', () => {
  let component: FooterERPComponent;
  let fixture: ComponentFixture<FooterERPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterERPComponent]
    });
    fixture = TestBed.createComponent(FooterERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
