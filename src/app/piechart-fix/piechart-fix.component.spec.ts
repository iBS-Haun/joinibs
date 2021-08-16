import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartFixComponent } from './piechart-fix.component';

describe('PiechartFixComponent', () => {
  let component: PiechartFixComponent;
  let fixture: ComponentFixture<PiechartFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiechartFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
