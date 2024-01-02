import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrl: './opendialog.component.css'
})
export class OpendialogComponent {

  taskName = new FormControl;

  constructor(public dialogRef: MatDialogRef<OpendialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addtask() {
    console.log(this.taskName.value)
  }

}
