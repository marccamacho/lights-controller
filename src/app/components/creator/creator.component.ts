import { Component, OnInit } from '@angular/core';
import { MatSnackBar }          from '@angular/material/snack-bar';
import { DataConfigService }    from '../../services/data-config';
import { GetKeysPipe }          from '../../pipes/get-keys.pipe';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { MatDialog, MatDialogRef }  from '@angular/material/dialog';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  tracks:any[];
  found:boolean=false;
  currentProgram:any;
  constructor(public dataService: DataConfigService, private httpclient: Http, public snackBar: MatSnackBar) { }
  
  
  get data():any{
    return this.dataService.dataConfig;
  }
  ngOnInit() {
    this.found=false;
    for(var i = 0; i < this.data.programs.length;i++){
      if(this.data.programs[i].windowconf.active==true){
        this.currentProgram=this.data.programs[i];
        this.found=true;
        break;
      }
    }
    if(this.found==false){
      alert("No s'ha trobat el programa actiu");
      this.found=false;
    } else{
      this.found=false;
      this.tracks=this.currentProgram.windowconf.tracks;
    } 
    //tracks
    this.tracks=this.data.conf;
  }
  sayhi(){
    alert(this.currentProgram.name);
  }

}
