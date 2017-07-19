import { Injectable } from '@angular/core';

@Injectable()
export class DataConfigService {

    serverIP    : string = "http://192.168.0.123:5000/";  // Server IP
    dataConfig  : any;          // Configuration data in JSON format. See README.md.
    currentPage : string = "TAULA DE CONTROL";

    constructor() {
        if (this.serverIP != "") {
            this.dataConfig = {
                        typeTags: ["LED", "Fan", "Light Bulb", "Speaker"],
                        conf: {
                            3:{typeTag:"LED", outputPin:"3", name:"Name", description:"Sample"},
                            5:{typeTag:"LED", outputPin:"5", name:"Name", description:"Sample"},
                            7:{typeTag:"LED", outputPin:"7", name:"Name", description:"Sample"},
                            29:{typeTag:"LED", outputPin:"29", name:"Name", description:"Sample"},
                            31:{typeTag:"LED", outputPin:"31", name:"Name", description:"Sample"},
                            33:{typeTag:"LED", outputPin:"33", name:"Name", description:"Sample"},
                            35:{typeTag:"LED", outputPin:"35", name:"Name", description:"Sample"},
                            37:{typeTag:"LED", outputPin:"37", name:"Name", description:"Sample"}
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
