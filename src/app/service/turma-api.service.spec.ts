import { TestBed } from '@angular/core/testing';

import { TurmaApiService } from './turma-api.service';

describe('TurmaApiService', () => {
  let service: TurmaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
