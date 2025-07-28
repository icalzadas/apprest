import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-top-bar.component.html',
  styleUrls: ['./pos-top-bar.component.css']
})
export class PosTopBarComponent {
  people = 1;

  increment() {
    this.people++;
  }

  decrement() {
    if (this.people > 1) this.people--;
  }
}
