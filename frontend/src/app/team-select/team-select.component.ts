import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  // send this variable out to parent component
  selectedOption: string;

  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    console.log('child event firing');
    this.childEvent.emit(this.selectedOption);
  }

}
