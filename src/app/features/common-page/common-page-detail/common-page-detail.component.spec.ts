import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPageDetailComponent } from './common-page-detail.component';

describe('CommonPageDetailComponent', () => {
  let component: CommonPageDetailComponent;
  let fixture: ComponentFixture<CommonPageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
