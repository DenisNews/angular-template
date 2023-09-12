import { Component } from '@angular/core';
import { emit } from 'src/app/eventEmitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  addTimestamp() {
    emit('addTimestamp');
  }
}
