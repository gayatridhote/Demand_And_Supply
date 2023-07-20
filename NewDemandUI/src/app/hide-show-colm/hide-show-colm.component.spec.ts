import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowColmComponent } from './hide-show-colm.component';

describe('HideShowColmComponent', () => {
  let component: HideShowColmComponent;
  let fixture: ComponentFixture<HideShowColmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideShowColmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideShowColmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
