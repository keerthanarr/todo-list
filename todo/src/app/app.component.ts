import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OpendialogComponent } from './opendialog/opendialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router, private fb: FormBuilder,public dialog: MatDialog) { }
  title = 'todo';
  todolist: any;

  ngOnInit() {

    this.todolist = this.fb.group({
      list: ['']
    })
  }

  addList() {
    console.log(this.todolist.value.list)
    this.router.navigateByUrl('/add')
  }

  showlist() {
    this.router.navigateByUrl('/task-list')
  }

  addtask() {
    console.log('add')
    const dialogRef = this.dialog.open(OpendialogComponent, {
    });
  }
}
