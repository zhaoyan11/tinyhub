import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLangComponent } from './code-lang.component';

describe('CodeLangComponent', () => {
  let component: CodeLangComponent;
  let fixture: ComponentFixture<CodeLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
