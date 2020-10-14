import { Injectable } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import {Customer} from '../model/customer';
import { appConfig } from '../config/appConfig';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor( private _geolocationService: GeolocationService ) { }

  formatCustomerRecords(customerdata:string):Customer[]{
    //check for valid customer records
    if(!customerdata)
      return [];

    try {
            
      let customers: Customer[] = [];
      let customerList:string[] = customerdata.split(/\r?\n/);

      for(let customer of customerList)
        customers.push(JSON.parse(customer))
      return customers;
    }
    catch (error) {
      return [];
    }
  }

  filterCustomers(customers:Customer[]):  Customer[]  {
    
    if(!customers)
      return [];
    
    try {
      let nearbyCustomers:Customer[] = [];
      for(let customer of customers){
        var officeLat = appConfig.officeLatitude;
        var officeLong = appConfig.officeLongitude;
        //Calculate distance from Dublin Office
        let res:any = this._geolocationService.CalculateDistance(officeLat, officeLong, customer.latitude, customer.longitude);
        if(res){
          let distance: number = res;

          //filter customers within 100km
          if(distance <= 100){
            nearbyCustomers.push(customer);
          }
        }
      }

      return nearbyCustomers;
    }
    catch (error) {
      return [];
    }
  }

  sortValidCustomers(customers: Customer[]): Customer[] {
    
    //sort by customer user_id
    return customers.sort((a, b) => Number(a.user_id) - Number(b.user_id));
  }


}
