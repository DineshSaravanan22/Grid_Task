import { Component, Inject ,Output,EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component';
// import { DeleteComponent } from '../delete/delete.component';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef:MatDialogRef<AppComponent>, @Inject(MAT_DIALOG_DATA) public dialogData:any,private mainService:MainService, public router:Router ,private toaster:ToastrService ){}
//  declarations
@Output() deleteEvent = new EventEmitter<Event>();
deleteData(){
  const id:any = this.dialogData.id
  const key:any =this.dialogData.key
     this.mainService.daleteValue(id).subscribe({
       next:(res)=>{
        this.dialogRef.close(res);
       this.toaster.error("Your Record is deleted");
       },
       error:console.log,
       
       
     }

     );
   }
   closeFuc(){
     this.dialogRef.close()
     }
 

}
