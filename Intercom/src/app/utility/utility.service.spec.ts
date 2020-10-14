import { TestBed, inject } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService]
    });
  });

  it('should be created', inject([UtilityService], (service: UtilityService) => {
    expect(service).toBeTruthy();
  }));
});


describe('formatCustomerRecords', ()=>{
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService]
    });
  });

  it('should return empty array if customer records is empty', inject([UtilityService], (service: UtilityService) => {
    expect(service.formatCustomerRecords('')).toEqual([]);
    expect(service.formatCustomerRecords(null)).toEqual([]);
    expect(service.formatCustomerRecords(undefined)).toEqual([]);
  }));

  it('should return empty array if customer records is not valid', inject([UtilityService], (service: UtilityService) => {
    expect(service.formatCustomerRecords('{"latitude":"53.00","user_id":1,"name":"CustomerA')).toEqual([]);
  }));

});

describe('filterCustomers', ()=>{
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityService]
    });
  });

  it('should return empty array if customer records is empty', inject([UtilityService], (service: UtilityService) => {
    expect(service.filterCustomers([])).toEqual([]);
    expect(service.filterCustomers(null)).toEqual([]);
    expect(service.filterCustomers(undefined)).toEqual([]);
  }));

});