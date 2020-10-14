import { TestBed, inject } from '@angular/core/testing';
import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('getCustomers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomersService]
    });
  });

  it('should fetch customers', inject([CustomersService], (service: CustomersService) => {
    let getCustomerTest = service.getCustomers();
    getCustomerTest.subscribe((res)=>{
      expect(res).not.toBeNull();
      expect(res).not.toBeUndefined();
    });
  }));

});
