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
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProgramableComponent } from './components/programable/programable.component';
import { MakersComponent } from './components/makers/makers.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigOutputComponent,
    ConfigOutputsComponent,
    FooterComponent,
    LoginComponent,
    ProgramableComponent,
    MakersComponent,
    ControlComponent
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
