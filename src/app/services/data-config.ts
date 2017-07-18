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
                            out_1:{typeTag:"LED", outputPin:"out_1", name:"Name", description:"Sample"},
                            out_2:{typeTag:"LED", outputPin:"out_2", name:"Name", description:"Sample"},
                            out_3:{typeTag:"LED", outputPin:"out_3", name:"Name", description:"Sample"},
                            out_4:{typeTag:"LED", outputPin:"out_4", name:"Name", description:"Sample"},
                            out_5:{typeTag:"LED", outputPin:"out_5", name:"Name", description:"Sample"},
                            out_6:{typeTag:"LED", outputPin:"out_6", name:"Name", description:"Sample"},
                            out_7:{typeTag:"LED", outputPin:"out_7", name:"Name", description:"Sample"},
                            out_8:{typeTag:"LED", outputPin:"out_8", name:"Name", description:"Sample"},
                            out_9:{typeTag:"LED", outputPin:"out_9", name:"Name", description:"Sample"},
                            out_10:{typeTag:"LED", outputPin:"out_10", name:"Name", description:"Sample"},
                            out_11:{typeTag:"LED", outputPin:"out_11", name:"Name", description:"Sample"},
                            out_12:{typeTag:"LED", outputPin:"out_12", name:"Name", description:"Sample"},
                            out_13:{typeTag:"LED", outputPin:"out_13", name:"Name", description:"Sample"},
                            out_14:{typeTag:"LED", outputPin:"out_14", name:"Name", description:"Sample"},
                            out_15:{typeTag:"LED", outputPin:"out_15", name:"Name", description:"Sample"},
                            out_16:{}
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
