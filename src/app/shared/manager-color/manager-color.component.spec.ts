import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerColorComponent } from './manager-color.component';

describe('ManagerColorComponent', () => {
  let component: ManagerColorComponent;
  let fixture: ComponentFixture<ManagerColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
