import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataConfigService {

    serverIP    : string = "http://192.168.0.122:5000/";  // Server IP
    dataConfig  : any;          // Configuration data in JSON format. See README.md.
    currentPage : string = "TAULA DE CONTROL";

    constructor(private httpclient: Http) {
    }

    // Get configuration JSON from server
    public getRemoteConfig(): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        const promise = this.httpclient.get(this.serverIP+"config", { headers }).map((res) => res.json()).toPromise();
        promise.then(config => {
            this.dataConfig = config;     // <--- THIS RESOLVES AFTER
            console.log(this.dataConfig);
        });
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
