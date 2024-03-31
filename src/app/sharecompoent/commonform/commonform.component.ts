import { Component, Inject, OnInit, } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormGroup, FormControl, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../../service/main.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commonform',
  templateUrl: './commonform.component.html',
  styleUrls: ['./commonform.component.css']
})
export class CommonformComponent {
  // declaration
  date1 = new Date();
  todayDate: any;
  CurrentYear = this.date1.getUTCFullYear();
  CurrentMonth = this.date1.getUTCMonth() + 1;
  CurrentDay = this.date1.getUTCDate();
  FinalMonth: any;
  FinalDay: any;
  newData: any;
  originalData: any;

  constructor(public dialogRef: MatDialogRef<AppComponent>, private mainService: MainService, private router: Router, private toaster: ToastrService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private snackbar: MatSnackBar) {
    // this.userForm.patchValue(this.data)
    if (this.CurrentMonth < 10) {

      this.FinalMonth = "0" + this.CurrentMonth;
    } else {
      this.FinalMonth = this.CurrentMonth;
    }
    // get finalday
    if (this.CurrentDay < 10) {
      this.FinalDay = "0" + this.CurrentDay;
    } else {
      this.FinalDay = this.CurrentDay;
    }
    this.todayDate = this.CurrentYear + "-" + this.FinalMonth + "-" + this.FinalDay;
    console.log(this.todayDate);
    this.getCurrentDateAsString()


  }
  ngOnInit() {
    if (this.data.mode == "edit") { 
      this.getdata(this.data.id);
    }
  }

  getdata(id: any) {
    this.mainService.getSingleUserData(id).subscribe((res) => {

      this.originalData = res[0];
      this.userForm.patchValue({
        Yard: this.originalData.yard,
        LinerName: this.originalData.linerName,
        ReferenceNumber: this.originalData.referenceNumber,
        Type: this.originalData.type,
        BookingDate: this.originalData.bookingDate,
        BookingValidity: this.originalData.bookingValidity,
        ReleaceTo: this.originalData.releaceTo,
        VesselCarrier: this.originalData.vesselCarrier,
        VesselName: this.originalData.vesselName,
        VoyageNumber: this.originalData.voyageNumber,
        ArrivalDate: this.originalData.arrivalDate,
        DepartureDate: this.originalData.departureDate,
        LoadingPort: this.originalData.loadingPort,
        DischargePort: this.originalData.dischargePort,
        Distination: this.originalData.distination,
        Status: this.originalData.status,
        OutContract: this.originalData.outContract,
        BLNumber: this.originalData.blNumber,
        Remarks: this.originalData.remarks
      });
      this.fetchFun();
    })

  }
  fetchFun(){
    this.userForm.get('Yard')?.setValue(this.originalData.yard);
    this.userForm.get('LinerName')?.setValue(this.originalData.linerName);
    this.userForm.get('Type')?.setValue(this.originalData.type);
    this.userForm.get('Status')?.setValue(this.originalData.status);
  }
  defaultValue: string = 'abcd123456';
  // Crate Add Form 
  bookingDate = '';
  userForm = new FormGroup({
    'Yard': new FormControl('', Validators.required),
    'LinerName': new FormControl(null, Validators.required),
    'ReferenceNumber': new FormControl('', [ Validators.pattern('^[A-Za-z]{4}\\d{6}$')]),
    'Type': new FormControl(null, [Validators.required]),
    'BookingDate': new FormControl(null, [Validators.required]),
    'BookingValidity': new FormControl(null, [Validators.required]),
    'ReleaceTo': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
    'VesselCarrier': new FormControl(null, [Validators.required]),
    'VesselName': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]),
    'VoyageNumber': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
    'ArrivalDate': new FormControl('', [Validators.required]),
    'DepartureDate': new FormControl(null, [Validators.required]),
    'LoadingPort': new FormControl(''),
    'DischargePort': new FormControl(''),
    'Distination': new FormControl(''),
    'Status': new FormControl('', [Validators.required]),
    'OutContract': new FormControl(''),
    'BLNumber': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]),
    'Remarks': new FormControl(''),

  });
  bookingValidity = this.userForm.get('BookingDate')?.value;

  getCurrentDateAsString() {
    this.userForm.patchValue({
      ArrivalDate: this.todayDate
    })
  }

  // userData:any[] =[];
  saveForm() {
    if (this.userForm.valid) {
      this.mainService.saveData(this.userForm.value).subscribe((res) => {
        this.dialogRef.close(res)
        this.toaster.success("Information saved")
      });
    } else {
      this.showAlert('Please fill out all required fields');
    }

  }

  //  edit function

  editFormfun() {
    if (!this.isDataChanged() && this.userForm.valid) {
      this.mainService.editValue(this.data.id, this.userForm.value).subscribe((result) => {
        this.dialogRef.close(result)
        this.toaster.success("Edited Successfully")
      })
    }
    else {
      if (this.userForm.valid) {
        this.dialogRef.close()
        this.toaster.warning("Nothing to change")
      } else {
        this.showAlert('Please fill out all required fields');
      }
    }
  }
  isDataChanged(): boolean {
    return this.areEqual(this.originalData, this.userForm.value)
  }
  areEqual(obj1: any, obj2: any): boolean {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
    if (obj1 === undefined || obj2 === undefined) {
      return false;
    }
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (!keys2.includes(key)) {
        return false;
      }
    }
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  private showAlert(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000
    });
  }
  get vyard() {
    return this.userForm.get('Yard');
  }
  get vname() {
    return this.userForm.get('ReferenceNumber');
  }
  get vtype() {
    return this.userForm.get('Type');
  }
  get vlinerName() {
    return this.userForm.get('LinerName');
  }
  get vreleseTo() {
    return this.userForm.get('ReleaceTo');
  }
  get gvesselName() {
    return this.userForm.get('VesselName');
  }
  get gvesselCarrier() {
    return this.userForm.get('VesselCarrier');
  }
  get varrivalDate() {
    return this.userForm.get('ArrivalDate');
  }
  get gvoyageNumber() {
    return this.userForm.get('VoyageNumber');
  }
  get vblNumber() {
    return this.userForm.get('BLNumber');
  }
  get vbookingDate() {
    return this.userForm.get('BookingDate');
  }
  get vbookingValidity() {
    return this.userForm.get('BookingValidity')
  }
  get vdepartureDate() {
    return this.userForm.get('DepartureDate')
  }
  get vstatus() {
    return this.userForm.get('Status')
  }

  onSatus() {
    if (this.userForm.get('Status')?.value === 'Expired') {
      this.userForm.get('OutContract')?.disable();
      this.userForm.get('BlNumber')?.disable();
      this.userForm.get('OutContract')?.reset();
      this.userForm.get('BlNumber')?.reset();


    } else {
      this.userForm.get('OutContract')?.enable();
      this.userForm.get('BLNumber')?.enable();
    }
  }
  onYard() {
    if (this.userForm.get('Yard')?.value === 'HK') {
      this.userForm.get('ReferenceNumber')?.disable();
      this.userForm.get('ReferenceNumber')?.setValue('abcd123456');
    }
  }


  isContractBlVisible(): boolean {
    return this.userForm.get('Status')?.value !== 'Expired';
  }
  closeFuc() {
    this.dialogRef.close()
  }

}
