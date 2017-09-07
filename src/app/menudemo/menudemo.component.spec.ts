import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudemoComponent } from './menudemo.component';

describe('MenudemoComponent', () => {
  let component: MenudemoComponent;
  let fixture: ComponentFixture<MenudemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
