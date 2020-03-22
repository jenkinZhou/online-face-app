import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTrainTypeComponent } from './choose-train-type.component';

describe('ChooseTrainTypeComponent', () => {
  let component: ChooseTrainTypeComponent;
  let fixture: ComponentFixture<ChooseTrainTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTrainTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTrainTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
