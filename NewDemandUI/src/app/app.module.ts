import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserDisplayComponent } from './user-display/user-display.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HideShowColmComponent } from './hide-show-colm/hide-show-colm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { ApplyHereComponent } from './apply-here/apply-here.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';



 

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    UserDisplayComponent,
    HideShowColmComponent,
    ApplyHereComponent,
    ReusableTableComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    MatAutocompleteModule,
    MatDialogModule,
    MatCheckboxModule, 
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    AngularFileUploaderModule,
    MatProgressBarModule
    

  ],
  providers: [
    AngularMultiSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
