import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisMain } from './chuck-norris-main.component';

describe('MainComponent', () => {
  let component: ChuckNorrisMain;
  let fixture: ComponentFixture<ChuckNorrisMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChuckNorrisMain ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
