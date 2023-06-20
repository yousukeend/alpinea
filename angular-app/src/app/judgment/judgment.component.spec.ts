import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgmentComponent } from './judgment.component';

describe('JudgmentComponent', () => {
  let component: JudgmentComponent;
  let fixture: ComponentFixture<JudgmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudgmentComponent]
    });
    fixture = TestBed.createComponent(JudgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
