import { Component, OnInit }    from '@angular/core';
import { OutputDevice }         from '../../classes/output-device'

import { OutputComponent }  from '../output/output.component';

import { DataConfigService }    from '../../services/data-config';
import { GetKeysPipe }          from '../../pipes/get-keys.pipe';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'config-outputs',
    templateUrl: './config-outputs.component.html',
    styleUrls: ['./config-outputs.component.scss']
})

export class ConfigOutputsComponent implements OnInit {

    currentDevice: OutputDevice = {typeTag:"", outputPin:"", name:"", description:""};

    constructor(public dataService: DataConfigService, public dialog: MdDialog) {

    }

    ngOnInit() {
        this.dataService.currentPage = "CONFIGURACIÓ DE LES SORTIDES"       
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    dataConfig : any;

    get data():string{
        return this.dataService.dataConfig;
    }


    open() {
        let dialogRef = this.dialog.open(DialogConfigComponent);
        let instance = dialogRef.componentInstance;     // Instance of Dialog

        instance.dataConfig = this.dataService.dataConfig;   // Input to Dialog
        instance.device = this.currentDevice;

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.currentDevice = result;
        });
    }
}

@Component({
    selector: 'dialog-config',
    templateUrl: './dialog-config.html',
    styleUrls: ['./dialog-config.scss']
})
export class DialogConfigComponent {
    device: OutputDevice = {typeTag:"", outputPin:"", name:"", description:""};
    dataConfig : any;
    outputCommand:string = "conf." + this.device.outputPin;
    constructor(public dialogRef: MdDialogRef<any>) { }
    show:boolean=false;

    closeDialog() {

      this.dialogRef.close(this.device);
      this.dataConfig.conf[this.device.outputPin] = this.device;
    }
}
