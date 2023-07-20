import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyHereComponent } from './apply-here.component';

describe('ApplyHereComponent', () => {
  let component: ApplyHereComponent;
  let fixture: ComponentFixture<ApplyHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyHereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
