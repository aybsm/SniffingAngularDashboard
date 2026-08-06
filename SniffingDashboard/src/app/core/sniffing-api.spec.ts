import { TestBed } from '@angular/core/testing';

import { SniffingApi } from './sniffing-api';

describe('SniffingApi', () => {
  let service: SniffingApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SniffingApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
