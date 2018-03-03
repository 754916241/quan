import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyValidateComponent } from './company-validate.component';

describe('CompanyValidateComponent', () => {
  let component: CompanyValidateComponent;
  let fixture: ComponentFixture<CompanyValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
