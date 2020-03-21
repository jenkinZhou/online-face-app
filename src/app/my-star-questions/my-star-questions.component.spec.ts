import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStarQuestionsComponent } from './my-star-questions.component';

describe('MyStarQuestionsComponent', () => {
  let component: MyStarQuestionsComponent;
  let fixture: ComponentFixture<MyStarQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStarQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
