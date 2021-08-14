import { TestBed } from '@angular/core/testing';

import { RightSideBarToggleService } from './right-side-bar-toggle.service';

describe('RightSideBarToggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightSideBarToggleService = TestBed.get(RightSideBarToggleService);
    expect(service).toBeTruthy();
  });
});
