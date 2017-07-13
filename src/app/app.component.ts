import { Component }        from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { DataConfigService }from './services/data-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public dataService: DataConfigService) {

    }

    get title():string {
        console.log(this.dataService.currentPage);
        return this.dataService.currentPage;
    }

}
