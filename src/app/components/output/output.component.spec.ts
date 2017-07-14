import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOutputComponent } from './config-output.component';

describe('ConfigOutputComponent', () => {
  let component: ConfigOutputComponent;
  let fixture: ComponentFixture<ConfigOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
