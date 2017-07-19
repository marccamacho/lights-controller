import { Component, OnInit }    from '@angular/core';
import { MdSnackBar } from '@angular/material';

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

    constructor(public dataService: DataConfigService, private httpclient: Http, public snackBar: MdSnackBar) {

    }

    ngOnInit() {
        this.dataService.currentPage = "TAULA DE CONTROL"
    }

    ngOnDestroy(){
        this.dataService.currentPage = ""
    }

    toggleLED(pin){
        if (!this.dataService.dataConfig.conf[pin].active) {      // Does not exist

            // Crida HTTP per engegar el LED que està en el PIN: <pin>
            let crida  =  this.dataService.serverIP + "on?pins=" + pin;

            // Make the HTTP request:
            this.httpclient.get(crida)
                .timeout(1000)
                .subscribe(
                    (data) => {
                                console.log("Resposta rebuda")
                                this.dataService.dataConfig.conf[pin].active = true;
                            },
                    err => this.openSnackBar("Error en la connexió", "CLOSE")
                );
        } else{
            this.dataService.dataConfig.conf[pin].active = false;

            // Crida HTTP per apagar el LED que està en el PIN: <pin>
            let crida  =  this.dataService.serverIP + "off?pins=" + pin;

            // Make the HTTP request:
            this.httpclient.get(crida)
                .timeout(1000)
                .subscribe(
                    (data) => {
                                console.log("Resposta rebuda")
                                this.dataService.dataConfig.conf[pin].active = false;
                            },
                    err => this.openSnackBar("Error en la connexió", "CLOSE")
                );
        }
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
