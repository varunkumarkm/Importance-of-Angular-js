import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReversePipePipe } from './pipes/reverse-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
