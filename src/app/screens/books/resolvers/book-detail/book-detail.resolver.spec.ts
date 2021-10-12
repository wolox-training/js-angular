import { TestBed } from '@angular/core/testing';

import { BookDetailResolver } from './book-detail.resolver';

describe('BookDetailResolver', () => {
  let resolver: BookDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BookDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
