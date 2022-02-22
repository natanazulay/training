import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotVipComponent } from './not-vip.component';

describe('NotVipComponent', () => {
  let component: NotVipComponent;
  let fixture: ComponentFixture<NotVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
