import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-user',
  templateUrl: './no-user.component.html',
  styleUrls: ['./no-user.component.scss']
})
export class NoUserComponent {

  constructor() { }

  @Output() login = new EventEmitter;
  @Output() register = new EventEmitter;

}
