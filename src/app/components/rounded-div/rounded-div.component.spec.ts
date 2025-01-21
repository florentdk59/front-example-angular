import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedDivComponent } from './rounded-div.component';

describe('RoundedDivComponent', () => {
  let component: RoundedDivComponent;
  let fixture: ComponentFixture<RoundedDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundedDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
