import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TimestampListComponent } from './timestamp-list/timestamp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TimestampListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
