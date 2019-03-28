import { TestBed } from '@angular/core/testing';

import { GoogleBooksApiService } from './google-books-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('GoogleBooksApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GoogleBooksApiService = TestBed.get(GoogleBooksApiService);
    expect(service).toBeTruthy();
  });
});
