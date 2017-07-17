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
                            out_1:{typeTag:"LED", outputPin:"out_1", name:"Nom", description:"hola què tal?"},
                            out_2:{typeTag:"LED", outputPin:"out_2", name:"Nom", description:"hola què tal?"},
                            out_3:{typeTag:"LED", outputPin:"out_3", name:"Nom", description:"hola què tal?"},
                            out_4:{typeTag:"LED", outputPin:"out_4", name:"Nom", description:"hola què tal?"},
                            out_5:{typeTag:"LED", outputPin:"out_5", name:"Nom", description:"hola què tal?"},
                            out_6:{typeTag:"LED", outputPin:"out_6", name:"Nom", description:"hola què tal?"},
                            out_7:{typeTag:"LED", outputPin:"out_7", name:"Nom", description:"hola què tal?"},
                            out_8:{typeTag:"LED", outputPin:"out_8", name:"Nom", description:"hola què tal?"},
                            out_9:{typeTag:"LED", outputPin:"out_9", name:"Nom", description:"hola què tal?"},
                            out_10:{typeTag:"LED", outputPin:"out_10", name:"Nom", description:"hola què tal?"},
                            out_11:{typeTag:"LED", outputPin:"out_11", name:"Nom", description:"hola què tal?"},
                            out_12:{typeTag:"LED", outputPin:"out_12", name:"Nom", description:"hola què tal?"},
                            out_13:{typeTag:"LED", outputPin:"out_13", name:"Nom", description:"hola què tal?"},
                            out_14:{typeTag:"LED", outputPin:"out_14", name:"Nom", description:"hola què tal?"},
                            out_15:{typeTag:"LED", outputPin:"out_15", name:"Nom", description:"hola què tal?"},
                            out_16:{typeTag:"LED", outputPin:"out_16", name:"Nom", description:"hola què tal?"}
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
