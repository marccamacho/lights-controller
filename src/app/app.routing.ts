import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { ConfigOutputComponent }    from './components/config-output/config-output.component';
import { ConfigOutputsComponent }   from './components/config-outputs/config-outputs.component';

// Configuración de las rutas
const appRoutes: Routes = [
    { path: '',   redirectTo: '/hello', pathMatch: 'full' },
    { path: 'hello', component: ConfigOutputComponent, data:[{pageTitle: 'HOLA?'}] },
    { path: 'config-outputs', component: ConfigOutputsComponent, data:[{pageTitle: 'CONFIGURACIÓ'}] }
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
