import { Component,OnInit } from '@angular/core';
import { MainService } from './service/main.service';
import { Router } from '@angular/router';
// import { ChangeDetectorRef } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { EditbuttonComponent } from './sharecompoent/editbutton/editbutton.component';
// import { CommonformComponent } from './sharecompoent/commonform/commonform.component';
import { MatLabel } from '@angular/material/form-field';
import { DeleteComponent } from './sharecompoent/delete/delete.component';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { ConfirmationDialogComponent } from './sharecompoent/confirmation-dialog/confirmation-dialog.component';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ MatLabel ]
})
export class AppComponent {
  constructor(private mainService:MainService,private route:Router ,private dialogRef:MatDialog){

  };
  
   ngOnInit(){
    this.gridDataFun();
    
   }
// Declaration
   gridData:any[]=[];
   mode:string='';

   gridDataFun(){
    this.mainService.getData().subscribe((result)=>{
      console.log(result);
      if(result && result!=null){
        this.gridData = Object.keys(result).map(key => ({
          id: key,
          ...result[key]
      }));
      console.log(this.gridData);
      
      }else{
        this.gridData =[];
      }
      
    })
   }
  colDefs: ColDef[] = [
    { field: "id",flex:1, headerName:"ID"},
    { field: "yard",flex:1 },
    { field: "linerName",flex:1 },
    { field: "referenceNumber",flex:1 },
    { field: "type",flex:1},
    { headerName:"Delete Action",flex:1,cellRenderer:DeleteComponent,
     cellRendererParams:{
      onClick:this.openConform.bind(this)
     }
    },
    { headerName:"Edit Action",flex:1 ,cellRenderer:EditbuttonComponent },
  ];

  // functions
  addForm(event:any){
    this.mode="Add"
  //  var addFormPoup= this.dialogRef.open(CommonformComponent);
  event.afterClosed().subscribe((res:any)=>{
     console.log(res);
     this.gridDataFun();
    })

  }
  openConform(event:any,key:any){
   
    console.log(event,key);
    
    var deleteFormPoup =  this.dialogRef.open(ConfirmationDialogComponent,{
      data:{id:event.data.id}
    })
    deleteFormPoup.afterClosed().subscribe((res:any)=>{

      // delete this.gridData[key];
      // if (key >= 0 && key < this.gridData.length) {
      //   this.gridData.splice(key, 1);
   
      // }
      setTimeout(() => {
       this.gridDataFun();    
      }, 2000);
    })
  }
}
