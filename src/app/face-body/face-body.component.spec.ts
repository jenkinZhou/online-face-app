import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceBodyComponent } from './face-body.component';

describe('FaceBodyComponent', () => {
  let component: FaceBodyComponent;
  let fixture: ComponentFixture<FaceBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
