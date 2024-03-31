import { Component, Output, EventEmitter } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements ICellRendererAngularComp {
  constructor(private dialog: MatDialog) { }
  // diclarations
  @Output() confirmEvent = new EventEmitter<any>()
  params: any;
 
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
    
  openConformDelete() {
    // var deleteFormPoup = this.dialog.open(ConfirmationDialogComponent, {
    //  data: { id: this.params.data.id,key:this.params.rowIndex}

    
    // })
    // this.confirmEvent.emit(data)
    
    this.params.onClick(this.params,this.params.rowIndex);

  }
}
