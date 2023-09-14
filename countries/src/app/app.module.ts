import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { GetapiService } from './services/getapi.service';
import {HttpClientModule} from '@angular/common/http';
import { FakeapiComponent } from './fakeapi/fakeapi.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    FakeapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetapiService],
  bootstrap: [FakeapiComponent]
})
export class AppModule { }
