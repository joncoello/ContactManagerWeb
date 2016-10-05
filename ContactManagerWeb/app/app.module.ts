import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule }      from '@angular/http';

import { ContactListComponent }  from './app.contactListComponent';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
  declarations: [ ContactListComponent ],
  bootstrap: [ContactListComponent ]
})
export class AppModule { }
