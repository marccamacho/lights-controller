// Needed modules
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER }from '@angular/core';
import { Router }                   from '@angular/router';
import { AppComponent }             from './app.component';
import { HttpModule }               from '@angular/http';

//Drag and drop
import { NgDragDropModule } from 'ng-drag-drop';
import { DragDropDirectiveModule} from "angular4-drag-drop";


// Material Imports
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MatSliderModule }          from '@angular/material/slider';
import { MatIconModule }            from '@angular/material/icon';
import { MatTabsModule }            from '@angular/material/tabs';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatListModule }            from '@angular/material/list';
import { MatButtonModule }          from '@angular/material/button';
import { MatSelectModule }          from '@angular/material/select';
import { MatInputModule }           from '@angular/material/input';
import { MatFormFieldModule }       from '@angular/material/form-field';

import { FlexLayoutModule }         from "@angular/flex-layout";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

// Components inputs
import { OutputComponent }          from './components/output/output.component';
import { ConfigOutputsComponent }   from './components/config-outputs/config-outputs.component';
import { DialogConfigComponent }    from './components/config-outputs/config-outputs.component';
import { DialogProgConfigComponent }    from './components/control/control.component';

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

//Other
import { ProgramComponent } from './components/program/program.component';
import { CreatorComponent } from './components/creator/creator.component';
import { DropAreaComponent } from './components/creator/drop-area/drop-area.component';
import { NavigationComponent } from './components/creator/navigation/navigation.component';
import { GenericBoxModule } from './components/creator/generic-box/generic-box.module';

export function init(dataConfig: DataConfigService) {
  return () => {
      if (dataConfig.debug) return dataConfig.getLocalConfig();
      else return dataConfig.getRemoteConfig();
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
    DialogProgConfigComponent,
    GetKeysPipe,
    ButtonsControlComponent,
    ProgramComponent,
    CreatorComponent,
    DropAreaComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule, MatSelectModule, MatTabsModule, MatSnackBarModule, MatButtonModule,
    MatSidenavModule, MatToolbarModule, MatDialogModule, MatIconModule, MatListModule,
    MatFormFieldModule, MatInputModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgDragDropModule.forRoot(),
    DragDropDirectiveModule,
    GenericBoxModule
  ],
  entryComponents: [ DialogConfigComponent, DialogProgConfigComponent ],
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
