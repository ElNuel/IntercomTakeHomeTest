import { Customer } from '../../model/customer';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../service/customers.service';
import { UtilityService } from '../../utility/utility.service';
import { FileHelperService } from '../../utility/file-helper.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Object;
  nearbyCustomers: Customer [];

  constructor(private _customerService: CustomersService, private _utilityService: UtilityService,
              private _fileHelperService:FileHelperService) { }

  ngOnInit() {
    this.checkNearbyCustomers();
  }

  checkNearbyCustomers() {
    this._customerService.getCustomers().subscribe(data => {
      this.customers = data
      let users = this._utilityService.formatCustomerRecords(data);
      this.nearbyCustomers = this._utilityService.filterCustomers(users);
      this.nearbyCustomers = this._utilityService.sortValidCustomers(this.nearbyCustomers);
      
    });
  }

  download(){

    this._fileHelperService.fileDownload('output.txt', this.nearbyCustomers);
    
  }

}
