import { TestBed, inject } from '@angular/core/testing';

import { SaveNewsService } from './save-news.service';

describe('SaveNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveNewsService]
    });
  });

  it('should be created', inject([SaveNewsService], (service: SaveNewsService) => {
    expect(service).toBeTruthy();
  }));
});
