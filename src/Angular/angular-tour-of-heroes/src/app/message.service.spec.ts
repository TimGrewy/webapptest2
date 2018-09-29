import { TestBed } from '@angular/core/testing';

import { MesagesService } from './mesages.service';

describe('MesagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesagesService = TestBed.get(MesagesService);
    expect(service).toBeTruthy();
  });
});
