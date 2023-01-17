import { TestBed } from '@angular/core/testing';

import { CardsCollectionService } from './cards-collection.service';

describe('CardsCollectionService', () => {
  let service: CardsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
