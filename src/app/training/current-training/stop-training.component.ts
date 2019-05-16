import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stop-training',
  template: `
  <h1 mat-dialog-title fxLayoutAlign="center">Are you sure?</h1>
  <mat-dialog-content fxLayoutAlign="center">
    <p>You already got {{ passedData.progress }}%</p>
  </mat-dialog-content>
  <mat-dialog-actions fxLayoutGap="10px">
    <button mat-flat-button color="warn"[mat-dialog-close]="true">Yes</button>
    <button mat-flat-button color="accent"[mat-dialog-close]="false">No</button>
  </mat-dialog-actions>`
})

export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }
}