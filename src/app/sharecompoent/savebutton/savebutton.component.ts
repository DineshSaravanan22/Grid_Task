import { Component,Output,EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonformComponent } from '../commonform/commonform.component';
@Component({
  selector: 'app-savebutton',
  templateUrl: './savebutton.component.html',
  styleUrls: ['./savebutton.component.css']
})
export class SavebuttonComponent {
  constructor(private dialog:MatDialogRef<CommonformComponent>){}
  @Output() saveEvent = new EventEmitter<any>()
  saveForm(){
         this.saveEvent.emit();
  }

}
