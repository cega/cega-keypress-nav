import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleModComponent } from './example-mod.component';

describe('ExampleModComponent', () => {
  let component: ExampleModComponent;
  let fixture: ComponentFixture<ExampleModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
