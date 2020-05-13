import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresultformComponent } from './viewresultform.component';

describe('ViewresultformComponent', () => {
  let component: ViewresultformComponent;
  let fixture: ComponentFixture<ViewresultformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewresultformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewresultformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
