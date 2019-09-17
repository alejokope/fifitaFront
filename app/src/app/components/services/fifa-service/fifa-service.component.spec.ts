import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaServiceComponent } from './fifa-service.component';

describe('FifaServiceComponent', () => {
  let component: FifaServiceComponent;
  let fixture: ComponentFixture<FifaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
