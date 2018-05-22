import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	private itemsToDrop:Array<Object> = [
		{
			name: 'LED',
			content: 'pin 34'
		},
		{
			name: 'Fum',
			content: 'pin 14'
		},
		{
			name: 'Llum',
			content: 'pin 20'
		},
	]
  constructor() { }

  ngOnInit() {
  }
  private releaseDrop(event){
  	let index = this.itemsToDrop.indexOf(event);
  	if (index >= 0){
  		this.itemsToDrop.splice(index,1);
  	}
  }

}
