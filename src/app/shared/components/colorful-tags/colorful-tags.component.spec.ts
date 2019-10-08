import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulTagsComponent } from './colorful-tags.component';

describe('ColorfulTagsComponent', () => {
  let component: ColorfulTagsComponent;
  let fixture: ComponentFixture<ColorfulTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
