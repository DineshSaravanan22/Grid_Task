import { Component,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonformComponent } from '../commonform/commonform.component';


@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddbuttonComponent  {
  
  constructor( private dialog:MatDialog){};
  @Output() firstEvent = new EventEmitter<any>();
  

    addForm(){
    const diaLogRef = this.dialog.open(CommonformComponent,{
      data:{}
    });
     this.firstEvent.emit(diaLogRef);
  }
}
