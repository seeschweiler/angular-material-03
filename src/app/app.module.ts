import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MdMenuModule, MdButtonModule, MdIconModule, MdCardModule, MdSidenavModule, MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent,
    SidenavdemoComponent,
    ToolbardemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
