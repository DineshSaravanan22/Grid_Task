import { Component,Output,EventEmitter} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonformComponent } from '../commonform/commonform.component';
@Component({
  selector: 'app-cancelbutton',
  templateUrl: './cancelbutton.component.html',
  styleUrls: ['./cancelbutton.component.css']
})
export class CancelbuttonComponent {
  @Output() cencelEvent = new EventEmitter<Event>();
  constructor(public dialogRef:MatDialogRef<CommonformComponent>){}
  closeFuc(){
    // this.dialogRef.close()
    this.cencelEvent.emit();
  }
}
