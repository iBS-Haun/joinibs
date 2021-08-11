import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KevinsComponentComponent } from './kevins-component.component';


describe('KevinsComponentComponent', () => {
  let component: KevinsComponentComponent;
  let fixture: ComponentFixture<KevinsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KevinsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KevinsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
