import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataConfigService {

    serverIP    : string = "http://lights-controller.local:5000/";  // Server IP
    dataConfig  : any;                                              // Configuration data in JSON format. See README.md.
    currentPage : string = "TAULA DE CONTROL";
    debug       : boolean = true;

    constructor(private httpclient: Http) {
    }

    public getLocalConfig() {
        this.dataConfig = {
            "typeTags": ["LED"],
            "conf": {
                 "33": {"active": false, "description": "Vermell", "outputPin": "33", "name": "Mig", "type": "LED"},
                 "31": {"active": true, "description": "Dreta", "outputPin": "31", "name": "Dalt", "type": "LED"},
                 "37": {"active": false, "description": "Vermell", "outputPin": "37", "name": "Mig", "type": "LED"},
                 "29": {"active": false, "outputPin": "29", "description": "dreta", "name": "Baix", "type": "LED"},
                 "35": {"active": false, "description": "Vermell", "outputPin": "29", "name": "Mig", "type": "LED"},
                 "3": {"active": true, "outputPin": "3", "description": "Esquerre", "name": "Dalt", "type": "LED"},
                 "5": {"active": false, "description": "Esquerre", "outputPin": "5", "name": "Baix", "type": "LED"},
                 "7": {"active": false, "description": "Vermell", "outputPin": "7", "name": "Mig", "type": "LED"}},
                 "programs": [
                     {"htmlQuery": "http://lights-controller.local:5000/rafaga?pins=3&pins=5&pins=7&pins=29&pins=31&delay=0.5&times=20", "name": "Rafaga", "description": "Rafaga senzilla"},
                     {"htmlQuery": "http://lights-controller.local:5000/circular?delay=0.5&times=5", "name": "Circular", "description": "Circular senzill"},
                     {"htmlQuery": "http://lights-controller.local:5000/off?pins=3&pins=5&pins=7&pins=29&pins=31", "name": "Apaga tots", "description": "Apaga tots"},
                     {"htmlQuery": "http://lights-controller.local:5000/on?pins=3&pins=5&pins=7&pins=29&pins=31", "name": "Engega tots", "description": "Engega tots"},
                     {"htmlQuery": "http://lights-controller.local:5000/updown?delay=0.25&times=5", "name": "Engega tots", "description": "Engega tots"}
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
