import { Component, OnInit }    from '@angular/core';

import { DataConfigService }    from '../../services/data-config';
import { GetKeysPipe }          from '../../pipes/get-keys.pipe';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
    outputs = [];

    constructor(public dataService: DataConfigService) {

    }

    ngOnInit() {
        this.dataService.currentPage = "TAULA DE CONTROL"
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    tooglePin(pin){
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
