import { Component, OnDestroy, OnInit } from '@angular/core';
import { addEventListener, removeEventListener } from 'src/app/eventEmitter';

@Component({
  selector: 'app-timestamp-list',
  templateUrl: './timestamp-list.component.html',
  styleUrls: ['./timestamp-list.component.css'],
})
export class TimestampListComponent implements OnInit, OnDestroy {
  timestamps: number[] = [];

  ngOnInit(): void {
    addEventListener('addTimestamp', this.addNewTimestamp.bind(this));
  }

  ngOnDestroy(): void {
    removeEventListener('addTimestamp', this.addNewTimestamp.bind(this));
  }

  private addNewTimestamp() {
    this.timestamps = [...this.timestamps, Date.now()];
  }
}
