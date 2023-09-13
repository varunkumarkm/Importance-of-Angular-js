import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MultipleServiceComponent } from './components/multiple-service/multiple-service.component';
import { HelloServiceService } from './services/hello-service.service';
import { CustomerServiceService } from './services/customer-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MultipleServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HelloServiceService, CustomerServiceService],
  bootstrap: [MultipleServiceComponent]
})
export class AppModule { }
