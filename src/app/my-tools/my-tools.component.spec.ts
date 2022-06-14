import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToolsComponent } from './my-tools.component';

describe('MyToolsComponent', () => {
  let component: MyToolsComponent;
  let fixture: ComponentFixture<MyToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
