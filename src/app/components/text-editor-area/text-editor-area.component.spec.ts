import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorAreaComponent } from './text-editor-area.component';

describe('TextEditorAreaComponent', () => {
  let component: TextEditorAreaComponent;
  let fixture: ComponentFixture<TextEditorAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorAreaComponent]
    });
    fixture = TestBed.createComponent(TextEditorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
