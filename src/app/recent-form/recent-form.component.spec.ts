import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFormComponent } from './recent-form.component';

describe('RecentFormComponent', () => {
  let component: RecentFormComponent;
  let fixture: ComponentFixture<RecentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
