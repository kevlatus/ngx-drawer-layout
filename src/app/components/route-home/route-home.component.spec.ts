import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DrawerLayoutModule} from 'drawer-layout';

import {RouteHomeComponent} from './route-home.component';

describe('RouteHomeComponent', () => {
  let component: RouteHomeComponent;
  let fixture: ComponentFixture<RouteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouteHomeComponent
      ],
      imports: [
        FormsModule,
        MatCardModule,
        MatSlideToggleModule,
        DrawerLayoutModule.forRoot(),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
