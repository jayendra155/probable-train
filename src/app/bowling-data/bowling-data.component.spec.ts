import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingDataComponent } from './bowling-data.component';

describe('BowlingDataComponent', () => {
  let component: BowlingDataComponent;
  let fixture: ComponentFixture<BowlingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
