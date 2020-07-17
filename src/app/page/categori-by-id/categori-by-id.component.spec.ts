import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriByIDComponent } from './categori-by-id.component';

describe('CategoriByIDComponent', () => {
  let component: CategoriByIDComponent;
  let fixture: ComponentFixture<CategoriByIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriByIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
