import { TestBed } from '@angular/core/testing';

import { BoardService } from './board.service';
import { HttpClientModule } from '@angular/common/http';

describe('BoardService', () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
