import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AgGridAngular } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule}from '@angular/fire/compat';
import { environment } from './environment';
import { HttpClientModule } from '@angular/common/http';
import { AddbuttonComponent } from './sharecompoent/addbutton/addbutton.component';
import { CancelbuttonComponent } from './sharecompoent/cancelbutton/cancelbutton.component';
import { EditbuttonComponent } from './sharecompoent/editbutton/editbutton.component';
import { SavebuttonComponent } from './sharecompoent/savebutton/savebutton.component';
import { CommonformComponent } from './sharecompoent/commonform/commonform.component';
import { ConfirmationDialogComponent } from './sharecompoent/confirmation-dialog/confirmation-dialog.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DeleteComponent } from './sharecompoent/delete/delete.component';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    AddbuttonComponent,
    CancelbuttonComponent,
    EditbuttonComponent,
    SavebuttonComponent,
    CommonformComponent,
    ConfirmationDialogComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    MatNativeDateModule,
    MatIconModule

    
  ],
  providers: [{provide:MAT_DATE_LOCALE,useValue:'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
