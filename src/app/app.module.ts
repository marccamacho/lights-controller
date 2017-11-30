// Needed modules
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER }from '@angular/core';
import { Router }                   from '@angular/router';
import { AppComponent }             from './app.component';
import { HttpModule }               from '@angular/http';

// Material Imports
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MatSliderModule }          from '@angular/material/slider';
import { MatSelectModule }          from '@angular/material/select';
import { MatIconModule }            from '@angular/material/icon';
import { MatTabsModule }            from '@angular/material/tabs';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatListModule }            from '@angular/material/list';
import { MatButtonModule }          from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

// Components inputs
import { OutputComponent }          from './components/output/output.component';
import { ConfigOutputsComponent }   from './components/config-outputs/config-outputs.component';
import { DialogConfigComponent }    from './components/config-outputs/config-outputs.component';
import { AppRoutingModule }         from './app.routing'; // Routing
import { FooterComponent }          from './components/footer/footer.component';
import { LoginComponent }           from './components/login/login.component';
import { ProgramableComponent }     from './components/programable/programable.component';
import { MakersComponent }          from './components/makers/makers.component';
import { ControlComponent }         from './components/control/control.component';
import { ButtonsControlComponent }  from './components/buttons-control/buttons-control.component';

// Services
import { DataConfigService }        from './services/data-config';

// Pipes
import { GetKeysPipe }              from './pipes/get-keys.pipe';
import { ProgramComponent } from './components/program/program.component';

export function init(dataConfig: DataConfigService) {
  return () => {
    return dataConfig.getRemoteConfig(); // add return
  };
}

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    ConfigOutputsComponent,
    FooterComponent,
    LoginComponent,
    ProgramableComponent,
    MakersComponent,
    ControlComponent,
    DialogConfigComponent,
    GetKeysPipe,
    ButtonsControlComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule, MatSelectModule, MatTabsModule, MatSnackBarModule, MatButtonModule,
    MatSidenavModule, MatToolbarModule, MatDialogModule, MatIconModule, MatListModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  entryComponents: [ DialogConfigComponent ],
  providers: [
      DataConfigService,
      {
        provide: APP_INITIALIZER,
        useFactory: init,
        deps: [DataConfigService],
        multi: true
      }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
