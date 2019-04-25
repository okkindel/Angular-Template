import * as fromNotyfications from '../../store/reducers';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  message: string;

  constructor(private store: Store<fromNotyfications.ISnackBarState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(fromNotyfications.getNotyficationMessage))
      .subscribe(data => (this.message = data.message));
  }
}
