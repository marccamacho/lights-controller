import { Component, OnInit, Input } from '@angular/core';
import { Program } from '../../classes/program-query';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  @Input() currentProgram:Program;        
  constructor() { }

  ngOnInit() {
  }

}
