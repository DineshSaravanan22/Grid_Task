import { Component,Output,EventEmitter} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { CommonformComponent } from '../commonform/commonform.component';
@Component({
  selector: 'app-editbutton',
  templateUrl: './editbutton.component.html',
  styleUrls: ['./editbutton.component.css']
})
export class EditbuttonComponent implements ICellRendererAngularComp {
  constructor (private dialog:MatDialog){}
  // declarations
  @Output() editFormEvent = new EventEmitter<any>()
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
  editForm(){
    
    var editFormPoup =this.dialog.open(CommonformComponent,{
      data:{id:this.params.data.id,mode:"edit"}
    });
    this.editFormEvent.emit(editFormPoup);
  
    }
}
