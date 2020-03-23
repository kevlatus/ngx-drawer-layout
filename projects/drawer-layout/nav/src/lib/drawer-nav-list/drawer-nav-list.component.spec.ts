import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { drawerOptionsToken, defaultDrawerLayoutOptions } from 'ngx-drawer-layout';
import { DrawerNavListComponent } from './drawer-nav-list.component';
import { DrawerNavItemComponent } from '../drawer-nav-item/drawer-nav-item.component';
// import { windowFactory } from '../drawer-layout.module';

describe('DrawerNavListComponent', () => {
  let component: DrawerNavListComponent;
  let fixture: ComponentFixture<DrawerNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DrawerNavItemComponent,
        DrawerNavListComponent,
      ],
      imports: [
        RouterTestingModule,
        MatIconModule,
      ],
      providers: [
        // { provide: 'window', useFactory: windowFactory, deps: [PLATFORM_ID] },
        { provide: drawerOptionsToken, useValue: defaultDrawerLayoutOptions },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
