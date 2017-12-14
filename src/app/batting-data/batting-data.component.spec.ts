import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingDataComponent } from './batting-data.component';

describe('BattingDataComponent', () => {
  let component: BattingDataComponent;
  let fixture: ComponentFixture<BattingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
