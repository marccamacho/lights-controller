import { Component, OnInit }    from '@angular/core';
import { DataConfigService }    from '../../services/data-config';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

    constructor(public dataService: DataConfigService) {

    }

    ngOnInit() {
        this.dataService.currentPage = "TAULA DE CONTROL"
    }

}
