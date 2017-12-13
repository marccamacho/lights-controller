import { Component, OnInit }    from '@angular/core';
import { MatSnackBar }          from '@angular/material/snack-bar';
import { ProgramComponent }     from '../program/program.component'

import { DataConfigService }    from '../../services/data-config';
import { GetKeysPipe }          from '../../pipes/get-keys.pipe';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout'



@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})

export class ControlComponent implements OnInit {
    outputs = [];           // Selected OUTPUTS
    resultsHTTP :string[];

    constructor(public dataService: DataConfigService, private httpclient: Http, public snackBar: MatSnackBar) {

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
