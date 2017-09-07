import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavdemoComponent } from './sidenavdemo.component';

describe('SidenavdemoComponent', () => {
  let component: SidenavdemoComponent;
  let fixture: ComponentFixture<SidenavdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
