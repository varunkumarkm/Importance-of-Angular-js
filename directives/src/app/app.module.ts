import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfComponent } from './if/if.component';
import { IfExampComponent } from './if-examp/if-examp.component';
import { SwitchComponent } from './switch/switch.component';
import { SwitchExampComponent } from './switch-examp/switch-examp.component';
import { ForComponent } from './for/for.component';
import { ForExampComponent } from './for-examp/for-examp.component';
import { MyIfDirective } from './customDirectives/my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    IfExampComponent,
    SwitchComponent,
    SwitchExampComponent,
    ForComponent,
    ForExampComponent,
    MyIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
