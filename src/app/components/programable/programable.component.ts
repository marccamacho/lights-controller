import { Component, OnInit }    from '@angular/core';
import { DataConfigService }    from '../../services/data-config';

@Component({
  selector: 'programable',
  templateUrl: './programable.component.html',
  styleUrls: ['./programable.component.scss']
})
export class ProgramableComponent implements OnInit {

    constructor(public dataService: DataConfigService) {

    }

    ngOnInit() {
        this.dataService.currentPage = "PROGRAMACIÓ D'ESDEVENIMENTS"
    }

}
