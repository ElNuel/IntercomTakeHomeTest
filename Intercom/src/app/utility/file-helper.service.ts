import { Injectable } from '@angular/core';
import {Customer} from '../model/customer'

@Injectable({
  providedIn: 'root'
})
export class FileHelperService {

  constructor() { }

  public fileDownload(filename, customers: Customer[]) {
    if(!filename || !customers)
      return false;
    try {
      
      let output:string = '';
      for(let customer of customers){
        output +=  'Name: '+ customer.name + ', ' +'User ID: '+ customer.user_id.toString() + '\n';
      }

      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
      a.setAttribute('download', filename);
      a.click();
      document.body.removeChild(a);
      return true;
    }
    catch (error)
    {
      return false;
    }
  }
}
