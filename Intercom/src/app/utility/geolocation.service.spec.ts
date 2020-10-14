import { TestBed, inject } from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should be created', inject([GeolocationService], (service: GeolocationService) => {
    expect(service).toBeTruthy();
  }));
});

describe('getDistance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should return undefined if longitude or latitude values are null or invalid ', inject([GeolocationService], (service: GeolocationService) => {
    expect(service.CalculateDistance(null, null, null, null)).toEqual(undefined);
  }));

  it('should return undefined if longitude and latitude values are same ', inject([GeolocationService], (service: GeolocationService) => {
    expect(service.CalculateDistance(1, -1, 1, -1)).toEqual(undefined);
  }));
});

describe('deg2rad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should be zero if input is not valid', inject([GeolocationService], (service: GeolocationService) => {
    expect(service.deg2rad(null)).toEqual(0);
  }));
});

describe('rad2deg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should be zero if input is not valid', inject([GeolocationService], (service: GeolocationService) => {
    expect(service.rad2deg(null)).toEqual(0);
  }));
});

