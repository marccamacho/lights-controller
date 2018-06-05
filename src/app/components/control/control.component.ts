import { Component, OnInit }    from '@angular/core';
import { MatSnackBar }          from '@angular/material/snack-bar';
import { ProgramComponent }     from '../program/program.component'

import { DataConfigService }    from '../../services/data-config';
import { GetKeysPipe }          from '../../pipes/get-keys.pipe';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { MatDialog, MatDialogRef }  from '@angular/material/dialog';

 
import { Routes, RouterModule, Router }     from '@angular/router';



@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})

export class ControlComponent implements OnInit {
    outputs = [];           // Selected OUTPUTS

    resultsHTTP :string[];

    constructor(public dataService: DataConfigService, private httpclient: Http, public snackBar: MatSnackBar, public dialog: MatDialog) {

    }

    open(selectedProgram){
        let dialogRef = this.dialog.open(DialogProgConfigComponent, {
            width: '1400px',
            height:'400px'
        });

        let instance = dialogRef.componentInstance;     // Instance of Dialog

        instance.dataConfig = this.dataService.dataConfig;   // Input to Dialog

        // Init object in DialogConfigComponent to solve errors modifying objects
        if (selectedProgram == undefined){
            selectedProgram = {type:"", outputPin:"", name:"", description:""};
        }
        /* instance.program = selectedProgram;
        No sé per a qué serveix aquesta línia. 
        instance.program no existeix, per tant, s'hauria de crear.
        */
        dialogRef.afterClosed().subscribe(result => {
            this.dataService.putRemoteConfig();
        });     
    }

    ngOnInit() {
        this.dataService.currentPage = "TAULA DE CONTROL"
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    toggleLED(pin){
        if (!this.dataService.dataConfig.conf[pin].active) {      // Does not exist
            this.dataService.dataConfig.conf[pin].active = true;

            // Crida HTTP per engegar el LED que està en el PIN: <pin>
            let crida  =  this.dataService.serverIP + "on?pins=" + pin;

            // Make the HTTP request:
            this.httpclient.get(crida)
                .subscribe(
                    (data) => {
                                console.log("Resposta rebuda")
                            }
                );
        } else{
            this.dataService.dataConfig.conf[pin].active = false;

            // Crida HTTP per apagar el LED que està en el PIN: <pin>
            let crida  =  this.dataService.serverIP + "off?pins=" + pin;

            // Make the HTTP request:
            this.httpclient.get(crida)
                .subscribe(
                    (data) => {
                                console.log("Resposta rebuda")
                            }
                );
        }
    }

    onProgram(programname){
        console.log(programname)
        let crida  =  this.dataService.serverIP + "runprogram/" + programname;
        this.httpclient.get(crida)
            .subscribe(
                (data) => {
                    console.log("Resposta rebuda");
                }
            );
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    get data():string{
        return this.dataService.dataConfig;
    }

}


@Component({
    selector: 'dialog-config',
    templateUrl: './dialog-config.html',
    styleUrls: ['./dialog-config.scss']
})
export class DialogProgConfigComponent {

    dataConfig: any;
    lastestProgram:number;
    currentProgram:any;

    constructor(private router: Router, public dialogRef: MatDialogRef<any>, public dataService: DataConfigService, private httpclient: Http, public snackBar: MatSnackBar) {
    }

    ngOnInit(){
        this.currentProgram = {
            "name": "Program",
            "conf": {
                 "33":  [],
                 "31":  [],
                 "37":  [],
                 "29":  [],
                 "35":  [],
                 "3":   [],
                 "5":   [],
                 "7":   [],
            },
            "windowconf": {
                "tracks":0,
                "actives":false,  //descativat
                "duration":0
            }
         };

        for(var i = 0; i < this.data.programs; i++){
            this.lastestProgram++;
        }
    }
    save() {
        console.log("worksman");
        // this.data.programs[this.lastestProgram+1]==this.currentProgram;
        this.currentProgram.windowconf.active=true;
        this.data.programs.push(this.currentProgram);
        console.log(this.data.programs);
        
        this.currentProgram= {
            "name": "Program",
            "conf": {
                 "33":  [],
                 "31":  [],
                 "37":  [],
                 "29":  [],
                 "35":  [],
                 "3":   [],
                 "5":   [],
                 "7":   [],
            },
            "windowconf": {
                "tracks":0,
                "active":false, //es desactiva la plantilla nova
                "duration":0
            }
         };
         this.router.navigate(['/creator']);
         this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

    delete() {
        /*this.dataConfig.conf[this.device.outputPin] = {};
        
        Com no sé on es guarda el programa, no el puc eliminar
        */
        this.close();
    }

    get data():any{
        return this.dataService.dataConfig;
    }
}
