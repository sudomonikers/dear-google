import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiMelissaComponent } from './hi-melissa.component';

describe('HiMelissaComponent', () => {
  let component: HiMelissaComponent;
  let fixture: ComponentFixture<HiMelissaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiMelissaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiMelissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
