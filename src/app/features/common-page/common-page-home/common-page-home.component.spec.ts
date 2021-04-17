import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPageHomeComponent } from './common-page-home.component';

describe('CommonPageHomeComponent', () => {
  let component: CommonPageHomeComponent;
  let fixture: ComponentFixture<CommonPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPageHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
