import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { productComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { ShowroomCarsComponent } from './showroom-cars/showroom-cars.component';
import { CarsellerComponent } from './carseller/carseller.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    SellerComponent,
    ShowroomCarsComponent,
    CarsellerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShowroomCarsComponent]
})
export class AppModule { }
