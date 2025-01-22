import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomH1TitleComponent } from './custom-h1-title.component';

describe('CustomH1TitleComponent', () => {
  let component: CustomH1TitleComponent;
  let fixture: ComponentFixture<CustomH1TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomH1TitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomH1TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
