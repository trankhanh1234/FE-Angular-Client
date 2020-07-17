import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImformationComponent } from './imformation.component';

describe('ImformationComponent', () => {
  let component: ImformationComponent;
  let fixture: ComponentFixture<ImformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
