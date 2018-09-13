import { TestBed, inject } from '@angular/core/testing';

import { ListNewsService } from './list-news.service';

describe('ListNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListNewsService]
    });
  });

  it('should be created', inject([ListNewsService], (service: ListNewsService) => {
    expect(service).toBeTruthy();
  }));
});
