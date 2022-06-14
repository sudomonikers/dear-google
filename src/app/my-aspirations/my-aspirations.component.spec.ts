import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAspirationsComponent } from './my-aspirations.component';

describe('MyAspirationsComponent', () => {
  let component: MyAspirationsComponent;
  let fixture: ComponentFixture<MyAspirationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAspirationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAspirationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
