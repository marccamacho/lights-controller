import { Component, OnInit }        from '@angular/core';
import { OutputDevice }             from '../../classes/output-device'

import { OutputComponent }          from '../output/output.component';

import { DataConfigService }        from '../../services/data-config';
import { GetKeysPipe }              from '../../pipes/get-keys.pipe';
import { MatDialog, MatDialogRef }  from '@angular/material/dialog';

@Component({
    selector: 'config-outputs',
    templateUrl: './config-outputs.component.html',
    styleUrls: ['./config-outputs.component.scss']
})

export class ConfigOutputsComponent implements OnInit {

    constructor(public dataService: DataConfigService, public dialog: MatDialog) {

    }

    ngOnInit() {
        this.dataService.currentPage = "CONFIGURACIÓ DE LES SORTIDES"
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    get data():string{
        return this.dataService.dataConfig;
    }


    open(selectedDevice) {
        let dialogRef = this.dialog.open(DialogConfigComponent, {
            width: '600px'
        });

        let instance = dialogRef.componentInstance;     // Instance of Dialog

        instance.dataConfig = this.dataService.dataConfig;   // Input to Dialog

        // Init object in DialogConfigComponent to solve errors modifying objects
        if (selectedDevice == undefined){
            selectedDevice = {typeTag:"", outputPin:"", name:"", description:""};
        }
        instance.device = selectedDevice;

        dialogRef.afterClosed().subscribe(result => {
            this.dataService.putRemoteConfig();
        });
    }
}

@Component({
    selector: 'dialog-config',
    templateUrl: './dialog-config.html',
    styleUrls: ['./dialog-config.scss']
})
export class DialogConfigComponent {

    device: OutputDevice;
    dataConfig: any;

    constructor(public dialogRef: MatDialogRef<any>) {
    }

    save() {
        this.dataConfig.conf[this.device.outputPin] = this.device;
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

    delete() {
        this.dataConfig.conf[this.device.outputPin] = {};
        this.close();
    }
}
