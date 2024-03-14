import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPaneComponent } from './config-pane.component';

describe('ConfigPaneComponent', () => {
  let component: ConfigPaneComponent;
  let fixture: ComponentFixture<ConfigPaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigPaneComponent]
    });
    fixture = TestBed.createComponent(ConfigPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
