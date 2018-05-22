import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataConfigService {

    serverIP    : string = "http://192.168.0.1:5000/";  // Server IP
    dataConfig  : any;                                              // Configuration data in JSON format. See README.md.
    currentPage : string = "TAULA DE CONTROL";
    debug       : boolean = true;

    constructor(private httpclient: Http) {
    }

    public getLocalConfig() {
        this.dataConfig = {
            "typeTags": ["LED"],
            "conf": {
                 "33":  {"active": false, "description": "Vermell", "outputPin": "33", "name": "Mig", "type": "LED"},
                 "31":  {"active": false, "description": "Dreta", "outputPin": "31", "name": "Dalt", "type": "LED"},
                 "37":  {"active": false, "description": "Vermell", "outputPin": "37", "name": "Mig", "type": "LED"},
                 "29":  {"active": false, "outputPin": "29", "description": "dreta", "name": "Baix", "type": "LED"},
                 "35":  {"active": false, "description": "Vermell", "outputPin": "29", "name": "Mig", "type": "LED"},
                 "3":   {"active": false, "outputPin": "3", "description": "Esquerre", "name": "Dalt", "type": "LED"},
                 "5":   {"active": false, "description": "Esquerre", "outputPin": "5", "name": "Baix", "type": "LED"},
                 "7":   {"active": false, "description": "Vermell", "outputPin": "7", "name": "Mig", "type": "LED"}
                },
            "programs":[
                {
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
                     }
                }
            ]
         };
    }
    // Get configuration JSON from server
    public getRemoteConfig(): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        const promise = this.httpclient.get(this.serverIP+"config", { headers }).map((res) => res.json()).toPromise();
        promise
            .then(
                config => {
                    this.dataConfig = config;     // <--- THIS RESOLVES AFTER
                    console.log(this.dataConfig);
                }
            )

        return promise;
    }

    // Update configuration JSON from server
    public putRemoteConfig (){
        console.log("Update config")
        this.httpclient.post(this.serverIP + "update", this.dataConfig)
                        .subscribe();
    }

    // Update default configuration JSON from server
    public defaultRemoteConfig () {
        // Get default configuration from server
    }

    // Export configuration JSON
    public exportConfig () {
        // Download file
    }

    // Import configuration JSON
    public importConfig (data : any) {

    }
}
