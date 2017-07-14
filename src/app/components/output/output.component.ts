import { Component, OnInit }    from '@angular/core';
import { OutputDevice }         from '../../classes/output-device'

@Component({
  selector: 'config-output',
  templateUrl: './config-output.component.html',
  styleUrls: ['./config-output.component.scss']
})

export class OutputComponent implements OnInit {

    currentDevice: OutputDevice = {typeTag:"LED", outputPin:"A13", name:"PIN:", description:"hola què tal?"};

    constructor() { }

    ngOnInit() {
    }

}
