import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ConfigOutputComponent }    from './components/config-output/config-output.component';
import { ConfigOutputsComponent }   from './components/config-outputs/config-outputs.component';
import { ProgramableComponent }     from './components/programable/programable.component';
import { MakersComponent }          from './components/makers/makers.component';
import { ControlComponent }         from './components/control/control.component';

// Configuración de las rutas
const appRoutes: Routes = [
    { path: '',             redirectTo: '/control', pathMatch: 'full' },
    { path: 'control',      component: ControlComponent },
    { path: 'outputs',      component: ConfigOutputsComponent },
    { path: 'programable',  component: ProgramableComponent },
    { path: 'makers',       component: MakersComponent },
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
