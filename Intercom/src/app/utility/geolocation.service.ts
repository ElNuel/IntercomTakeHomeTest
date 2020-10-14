import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public CalculateDistance(firstLat:number, firstLong: number, secondLat:number, secondLong:number)
  {
    if(!firstLat || !firstLong || !secondLat || !secondLong)
    {
      return undefined;
    }
     
    if ((firstLat == secondLat) && (firstLong == secondLong))
    {
        return undefined;
    }
    else
    {
      try {
        let theta:number = firstLong - secondLong;
        let distance:number = Math.sin(this.deg2rad(firstLat)) * Math.sin(this.deg2rad(secondLat)) + Math.cos(this.deg2rad(firstLat)) * Math.cos(this.deg2rad(secondLat)) * Math.cos(this.deg2rad(theta));
        
        distance = Math.acos(distance);
        //convert distance from radius to degrees
        distance = this.rad2deg(distance);

        distance = distance * 60 * 1.1515;
        
        //convert to kilometres
        distance = distance * 1.609344;
       
        return distance;
      }
      catch(error) {
        return undefined;
      }
    }
    
  }

  public deg2rad(degree:number)
  {
      if(!degree)
        return 0;
      return (degree * Math.PI / 180.0);
  }

  public rad2deg(radians:number)
  {
    if(!radians)
      return 0;
      return (radians / Math.PI * 180.0);
  }

}
