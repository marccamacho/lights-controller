// Needed modules
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { Router }                   from '@angular/router';
import { AppComponent }             from './app.component';

// Material Imports
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MaterialModule }           from '@angular/material';
import 'hammerjs';

// Components inputs
import { ConfigOutputComponent }    from './components/config-output/config-output.component';
import { ConfigOutputsComponent }   from './components/config-outputs/config-outputs.component';
import { AppRoutingModule }         from './app.routing'; // Routing

// Services
import { DataConfigService }        from './services/data-config';

@NgModule({
  declarations: [
    AppComponent,
    ConfigOutputComponent,
    ConfigOutputsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ DataConfigService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
