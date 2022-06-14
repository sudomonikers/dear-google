import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCareerComponent } from './my-career.component';

describe('MyCareerComponent', () => {
  let component: MyCareerComponent;
  let fixture: ComponentFixture<MyCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
