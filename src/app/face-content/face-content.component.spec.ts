import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceContentComponent } from './face-content.component';

describe('FaceContentComponent', () => {
  let component: FaceContentComponent;
  let fixture: ComponentFixture<FaceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
