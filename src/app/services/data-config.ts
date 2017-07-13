import { Injectable } from '@angular/core';

@Injectable()
export class DataConfigService {

    serverIP    : string = "";  // Server IP
    data        : any;          // Configuration data in JSON format. See README.md.

    constructor() {
        if (this.serverIP == "") {
            this.data = {
                        typeTags: ["LED RGB 50W", "LED blau 50W", "LED blanc 50W"],
                        conf: {
                            out_16: {}, out_17: {}, out_18: {}
                        }
            }
        } else {
            this.data = this.getRemoteConfig();
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
