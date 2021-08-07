import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompnentComponent } from './new-compnent.component';

describe('NewCompnentComponent', () => {
  let component: NewCompnentComponent;
  let fixture: ComponentFixture<NewCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
