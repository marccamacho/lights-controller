import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsControlsComponent } from './buttons-controls.component';

describe('ButtonsControlsComponent', () => {
  let component: ButtonsControlsComponent;
  let fixture: ComponentFixture<ButtonsControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
