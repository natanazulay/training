import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisMainComponent } from './chuck-norris-main.component';

describe('ChuckNorrisMainComponent', () => {
  let component: ChuckNorrisMainComponent;
  let fixture: ComponentFixture<ChuckNorrisMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckNorrisMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
