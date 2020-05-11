import { TestBed } from '@angular/core/testing';

import { AddmembersService } from './addmembers.service';

describe('AddmembersService', () => {
  let service: AddmembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
