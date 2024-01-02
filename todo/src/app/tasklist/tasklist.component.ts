import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'landry'},
  {position: 2, name: 'Buy medicine'},
  
];

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})


export class TasklistComponent {
 
  displayedColumns: string[] = ['position', 'name',];
  dataSource = ELEMENT_DATA;
}
