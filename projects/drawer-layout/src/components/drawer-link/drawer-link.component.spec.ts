import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerLinkComponent } from './drawer-link.component';

describe('DrawerLinkComponent', () => {
  let component: DrawerLinkComponent;
  let fixture: ComponentFixture<DrawerLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
