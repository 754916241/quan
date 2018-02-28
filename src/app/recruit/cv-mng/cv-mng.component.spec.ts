import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMngComponent } from './cv-mng.component';

describe('CvMngComponent', () => {
  let component: CvMngComponent;
  let fixture: ComponentFixture<CvMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
