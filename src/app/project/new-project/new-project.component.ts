import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
// import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>
  ) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    // this.oc.getContainerElement().classList.add(this.data.dark ? 'myapp-dark-theme' : null);
  }

  onClick() {
    this.dialogRef.close('I received your message');
  }
}
