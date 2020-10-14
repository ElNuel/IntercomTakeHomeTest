import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './views/customers/customers.component';
import { UtilityService } from './utility/utility.service';
import { GeolocationService } from './utility/geolocation.service';
import { FileHelperService } from './utility/file-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UtilityService,
    GeolocationService,
    FileHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
