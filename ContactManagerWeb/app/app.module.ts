import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactListComponent }  from './app.contactListComponent';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ContactListComponent ],
  bootstrap: [ContactListComponent ]
})
export class AppModule { }
