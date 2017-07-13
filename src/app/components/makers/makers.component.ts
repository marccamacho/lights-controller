import { Component, OnInit }    from '@angular/core';
import { DataConfigService }    from '../../services/data-config';

@Component({
  selector: 'makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.scss']
})
export class MakersComponent implements OnInit {

    constructor(public dataService: DataConfigService) {

    }

    ngOnInit() {
        this.dataService.currentPage = "QUI SÓN ELS MAKERS?"
    }

}
