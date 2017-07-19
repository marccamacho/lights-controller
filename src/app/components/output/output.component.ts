import { Component, OnInit, Input }    from '@angular/core';
import { OutputDevice }         from '../../classes/output-device'


@Component({
  selector: 'config-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})

export class OutputComponent implements OnInit {
    currentColor: string;

    @Input () currentDevice: OutputDevice;
    @Input () changeColor: boolean = true;

    constructor() {
        this.currentColor = "rgba(0, 0, 0, 0.54)";
    }

    ngOnInit() {
      console.log(this.currentDevice);
    }

    toggleColor() {
        if (this.changeColor) {
            if (this.currentDevice.active)   return "active";
            else                             return "inactive";
        } else return "inactive"
    }
}
