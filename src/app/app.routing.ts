import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { OutputComponent }          from './components/output/output.component';
import { ConfigOutputsComponent }   from './components/config-outputs/config-outputs.component';
import { ProgramableComponent }     from './components/programable/programable.component';
import { MakersComponent }          from './components/makers/makers.component';
import { ControlComponent }         from './components/control/control.component';
import { CreatorComponent }         from './components/creator/creator.component';

// Configuración de las rutas
const appRoutes: Routes = [
    { path: '',             component: ControlComponent },
    { path: 'outputs',      component: ConfigOutputsComponent },
    { path: 'makers',       component: MakersComponent },
    { path: 'develop',      component: ProgramableComponent},
    { path: 'creator',      component: CreatorComponent},
    { path: '404',          redirectTo: ''},
    { path: '**',           redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ],
    providers: [ ]
})
export class AppRoutingModule { }
