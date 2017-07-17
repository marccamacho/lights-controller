import { Injectable } from '@angular/core';

@Injectable()
export class DataConfigService {

    serverIP    : string = "";  // Server IP
    dataConfig  : any;          // Configuration data in JSON format. See README.md.
    currentPage : string = "TAULA DE CONTROL";

    constructor() {
        if (this.serverIP == "") {
            this.dataConfig = {
                        typeTags: ["LED", "Fan", "Light Bulb", "Speaker"],
                        conf: {
                            out_3:{},
                            out_5:{},
                            out_7:{}
                        }
            }
        } else {
            this.dataConfig = this.getRemoteConfig();
        }
    }

    // Get configuration JSON from server
    getRemoteConfig () {

    }

    // Update configuration JSON from server
    putRemoteConfig () {

    }

    // Update default configuration JSON from server
    defaultRemoteConfig () {
        // Get default configuration from server
    }

    // Export configuration JSON
    exportConfig () {
        // Download file
    }

    // Import configuration JSON
    importConfig (data : any) {

    }
}
