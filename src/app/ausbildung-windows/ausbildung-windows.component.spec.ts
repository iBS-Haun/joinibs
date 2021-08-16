import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusbildungWindowsComponent } from './ausbildung-windows.component';

describe('AusbildungWindowsComponent', () => {
  let component: AusbildungWindowsComponent;
  let fixture: ComponentFixture<AusbildungWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusbildungWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusbildungWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
