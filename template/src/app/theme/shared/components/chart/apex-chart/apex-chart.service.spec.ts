import { TestBed } from '@angular/core/testing';

import { ApexChartService } from './apex-chart.service';

describe('ApexChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApexChartService = TestBed.get(ApexChartService);
    expect(service).toBeTruthy();
  });
});
