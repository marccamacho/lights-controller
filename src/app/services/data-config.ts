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
                            out_7:{},
                            out_11:{},
                            out_12:{},
                            out_13:{},
                            out_15:{},
                            out_16:{},
                            out_18:{},
                            out_19:{},
                            out_21:{},
                            out_22:{},
                            out_23:{},
                            out_24:{},
                            out_26:{},
                            out_29:{},
                            out_31:{},
                            out_32:{},
                            out_33:{},
                            out_35:{},
                            out_36:{},
                            out_37:{},
                            out_38:{},
                            out_40:{}   
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
