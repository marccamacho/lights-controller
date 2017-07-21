import { Component, OnInit, Input } from '@angular/core';
import { Program } from '../../classes/program-query';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  currentColor: string;

  @Input() currentProgram: Program;
  @Input () changeColor: boolean = true;

  constructor() {
      this.currentColor = "rgba(0, 0, 0, 0.54)";
  }

  ngOnInit() {
    console.log(this.currentProgram);
  }

  toggleColor() {
          return "inactive";
      // if (this.changeColor) {
      //     if (this.currentProgram)   return "inactive";
      //     else                             return "inactive";
      // } else return "inactive"
  }

}
