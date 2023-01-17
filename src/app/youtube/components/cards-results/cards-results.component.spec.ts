import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsResultsComponent } from './cards-results.component';

describe('CardsResultsComponent', () => {
  let component: CardsResultsComponent;
  let fixture: ComponentFixture<CardsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
