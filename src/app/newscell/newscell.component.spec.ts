import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscellComponent } from './newscell.component';

describe('NewscellComponent', () => {
  let component: NewscellComponent;
  let fixture: ComponentFixture<NewscellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
