import { Component, OnInit }    from '@angular/core';

import { DataConfigService }    from '../../services/data-config';
import { GetKeysPipe }          from '../../pipes/get-keys.pipe';
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})

export class ControlComponent implements OnInit {
    outputs = [];           // Selected OUTPUTS
    activeOutputs = [];     // Active OUTPUTS
    resultsHTTP :string[];

    constructor(public dataService: DataConfigService, private httpclient: Http) {

    }

    ngOnInit() {
        this.dataService.currentPage = "TAULA DE CONTROL"
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    toggleLED(pin){
        var index = this.activeOutputs.indexOf(pin);
        if (index == -1) {      // Does not exist
            this.activeOutputs.push(pin);
        } else{
            this.activeOutputs.splice(index, 1);
        }
        console.log(this.outputs)

    }

    togglePin(pin){
        var index = this.outputs.indexOf(pin);
        if (index == -1) {      // Does not exist
            this.outputs.push(pin);
        } else{
            this.outputs.splice(index, 1);
        }
        console.log(this.outputs)
    }

    get data():string{
        return this.dataService.dataConfig;
    }

}
