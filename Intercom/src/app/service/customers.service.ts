import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    
    return this.http.get('assets/customers.txt', {responseType: 'text'})
    
  }
}
