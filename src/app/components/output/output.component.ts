import { Component, OnInit, Input }    from '@angular/core';
import { OutputDevice }         from '../../classes/output-device'


@Component({
  selector: 'config-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})

export class OutputComponent implements OnInit {
    currentColor : string;

    @Input () currentDevice: OutputDevice = {typeTag:"LED", outputPin:"A13", name:"PIN:", description:"hola què tal?"};
    @Input () changeColor: boolean = true;

    constructor() {
        this.currentColor = "rgba(0, 0, 0, 0.54)";
    }

    ngOnInit() {
      console.log(this.currentDevice);
    }

    ngOnChange() {
      console.log(this.currentDevice);
    }

    toggleColor() {
        console.log("Change color")
        if (this.changeColor) {
            if (this.currentColor == "rgba(0, 0, 0, 0.54)"){
                this.currentColor = "rgba(43, 189, 126, 0.54)";
            }
            else{
                this.currentColor = "rgba(0, 0, 0, 0.54)";
            }
        }
    }
}
