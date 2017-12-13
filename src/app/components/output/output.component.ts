import { Component, OnInit, Input }    from '@angular/core';
import { OutputDevice }         from '../../classes/output-device'


@Component({
  selector: 'config-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})

export class OutputComponent implements OnInit {
    @Input () currentDevice: OutputDevice;
    @Input () changeColor: boolean = true;

    constructor() { }

    ngOnInit() {
      console.log(this.currentDevice);
    }

    ngOnChange() {
      console.log(this.currentDevice);
    }
}
