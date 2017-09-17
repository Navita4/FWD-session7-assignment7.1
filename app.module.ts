import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ChildComponent} from './child.component;
import {httpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    httpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
