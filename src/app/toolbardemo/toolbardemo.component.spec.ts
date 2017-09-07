import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbardemoComponent } from './toolbardemo.component';

describe('ToolbardemoComponent', () => {
  let component: ToolbardemoComponent;
  let fixture: ComponentFixture<ToolbardemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbardemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
