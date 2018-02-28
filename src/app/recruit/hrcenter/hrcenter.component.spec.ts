import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrcenterComponent } from './hrcenter.component';

describe('HrcenterComponent', () => {
  let component: HrcenterComponent;
  let fixture: ComponentFixture<HrcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
