import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDataService } from './services/product-data.service';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    FetchComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule
      ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
