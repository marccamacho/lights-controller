import { Component, OnInit }    from '@angular/core';
import { OutputDevice }         from '../../classes/output-device'

import { DataConfigService }    from '../../services/data-config';

@Component({
    selector: 'config-outputs',
    templateUrl: './config-outputs.component.html',
    styleUrls: ['./config-outputs.component.scss']
})

export class ConfigOutputsComponent implements OnInit {

    constructor(public dataService: DataConfigService) {

    }

    ngOnInit() {
        this.dataService.currentPage = "CONFIGURACIÓ DE LES SORTIDES"
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    get data():string {
        return this.dataService.data;
    }
}
