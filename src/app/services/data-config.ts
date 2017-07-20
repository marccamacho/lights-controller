import { Injectable } from '@angular/core';

@Injectable()
export class DataConfigService {

    serverIP    : string = "http://192.168.0.122:5000/";  // Server IP
    dataConfig  : any;          // Configuration data in JSON format. See README.md.
    currentPage : string = "TAULA DE CONTROL";

    constructor() {
        if (this.serverIP != "") {
            this.dataConfig = {
                        typeTags: ["LED", "Fan", "Light Bulb", "Speaker"],
                        conf: {
                            3:{typeTag:"LED", outputPin:"3", name:"Name", description:"Sample", active: false},
                            5:{typeTag:"LED", outputPin:"5", name:"Name", description:"Sample", active: false},
                            7:{typeTag:"LED", outputPin:"7", name:"Name", description:"Sample", active: false},
                            29:{typeTag:"LED", outputPin:"29", name:"Name", description:"Sample", active: false},
                            31:{typeTag:"LED", outputPin:"31", name:"Name", description:"Sample", active: false},
                            33:{typeTag:"LED", outputPin:"33", name:"Name", description:"Sample", active: false},
                            35:{typeTag:"LED", outputPin:"35", name:"Name", description:"Sample", active: false},
                            37:{typeTag:"LED", outputPin:"37", name:"Name", description:"Sample", active: false}
                        },
                        programs: [
                            {htmlQuery: this.serverIP + "rafaga?pins=3&pins=9&delay=0.5&times=10", name: "Rafaga", description: "Rafaga senzilla"},
                            {htmlQuery: this.serverIP + "especial", name: "Especial", description: "La configuració ha de ser la de testeig (5 LEDs en forma de W)"},
                            {htmlQuery: this.serverIP + "offAll", name: "Apaga tots", description: "Apaga tots els LEDs configurats"},
                            {htmlQuery: this.serverIP + "onAll", name: "Apaga tots", description: "Encen tots els LEDs configurats"},
                            {htmlQuery: this.serverIP + "rafaga?pins=3&pins=9&delay=0.5&times=10", name: "Rafaga", description: "Rafaga senzilla"},
                            {htmlQuery: this.serverIP + "especial", name: "Especial", description: "La configuració ha de ser la de testeig (5 LEDs en forma de W)"},
                            {htmlQuery: this.serverIP + "offAll", name: "Apaga tots", description: "Apaga tots els LEDs configurats"},
                            {htmlQuery: this.serverIP + "onAll", name: "Apaga tots", description: "Encen tots els LEDs configurats"}
                        ]
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
