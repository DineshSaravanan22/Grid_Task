import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonformComponent } from './commonform.component';

describe('CommonformComponent', () => {
  let component: CommonformComponent;
  let fixture: ComponentFixture<CommonformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonformComponent]
    });
    fixture = TestBed.createComponent(CommonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
