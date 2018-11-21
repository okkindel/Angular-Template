import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatExpansionModule,
  MatStepperModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatStepperModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule
  ],
})
export class MaterialModule { }
