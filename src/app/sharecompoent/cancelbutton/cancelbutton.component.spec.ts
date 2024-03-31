import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelbuttonComponent } from './cancelbutton.component';

describe('CancelbuttonComponent', () => {
  let component: CancelbuttonComponent;
  let fixture: ComponentFixture<CancelbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelbuttonComponent]
    });
    fixture = TestBed.createComponent(CancelbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
