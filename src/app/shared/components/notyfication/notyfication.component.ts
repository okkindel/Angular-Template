import * as fromNotyfications from '../../store/reducers';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-notyfication',
  templateUrl: './notyfication.component.html',
  styleUrls: ['./notyfication.component.scss']
})
export class NotyficationComponent implements OnInit {
  message: string;

  constructor(private store: Store<fromNotyfications.ISnackBarState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(fromNotyfications.getNotyficationMessage))
      .subscribe(data => (this.message = data.message));
  }
}
