import { NgModule } from '@angular/core';

import {
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatStepperModule,
  MatSidenavModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

const components = [
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatStepperModule,
  MatSidenavModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  imports: [...components],
  exports: [...components]
})
export class MaterialModule {}
