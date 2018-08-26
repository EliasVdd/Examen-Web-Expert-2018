import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletItemComponent } from './toilet-item.component';

describe('ToiletItemComponent', () => {
  let component: ToiletItemComponent;
  let fixture: ComponentFixture<ToiletItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
