import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramableComponent } from './programable.component';

describe('ProgramableComponent', () => {
  let component: ProgramableComponent;
  let fixture: ComponentFixture<ProgramableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
