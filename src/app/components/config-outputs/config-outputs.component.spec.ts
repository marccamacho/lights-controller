import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOutputsComponent } from './config-outputs.component';

describe('ConfigOutputsComponent', () => {
  let component: ConfigOutputsComponent;
  let fixture: ComponentFixture<ConfigOutputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigOutputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
