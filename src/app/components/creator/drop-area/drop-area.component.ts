import { Component} from '@angular/core';

@Component({
  selector: 'app-drop-area',
  template:`
    <p>
      drop-area works!
    </p>
    <div dropDirective (dropEvent)="addDropItem($event)" class="droppable"  >
    	<app-generic-box *ngFor="let item of itemsDropped" [genericBox]='item' class="dropItem"></app-generic-box>
    </div>
  `,
  styleUrls: ['./drop-area.component.scss']
})
export class DropAreaComponent{
	private itemsDropped:Array<any> = [];
  constructor() { }

  private addDropItem(event){
  	this.itemsDropped.push(event);
  }
}
