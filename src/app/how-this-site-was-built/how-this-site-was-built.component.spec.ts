import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowThisSiteWasBuiltComponent } from './how-this-site-was-built.component';

describe('HowThisSiteWasBuiltComponent', () => {
  let component: HowThisSiteWasBuiltComponent;
  let fixture: ComponentFixture<HowThisSiteWasBuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowThisSiteWasBuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowThisSiteWasBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
