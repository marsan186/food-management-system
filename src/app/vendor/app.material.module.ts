import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule,MatStepperModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,MatPaginatorModule} from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule,MatListModule,MatStepperModule,MatDatepickerModule,MatNativeDateModule,MatFileUploadModule,MatTableModule,MatPaginatorModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule,MatStepperModule,MatDatepickerModule,MatNativeDateModule,MatFileUploadModule,MatTableModule,MatPaginatorModule
  ],
})
export class AppMaterialModule { }