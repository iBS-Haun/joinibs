import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiumComponent } from './studium.component';

describe('StudiumComponent', () => {
  let component: StudiumComponent;
  let fixture: ComponentFixture<StudiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
