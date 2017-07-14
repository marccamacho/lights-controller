import { Component, OnInit, Input } from '@angular/core';
import {OutputDevice} from '../../classes/output-device';

declare var $:any;

@Component({
  selector: 'config-output',
  templateUrl: './config-output.component.html',
  styleUrls: ['./config-output.component.scss']
})
export class ConfigOutputComponent implements OnInit {

  ngOnInit() {
    console.log("entro");
}

  showcrelement(){
    $('.crelement2').slideToggle(400);
  }


  @Input() dev= new OutputDevice(null,null,null,null);

  constructor() { }

  

}
