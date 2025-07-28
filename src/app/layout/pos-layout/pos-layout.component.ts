import { Component } from '@angular/core';
import { PosTopBarComponent } from '../../shared/components/pos-top-bar/pos-top-bar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pos-layout',
  imports: [CommonModule, PosTopBarComponent, RouterOutlet],
  templateUrl: './pos-layout.component.html',
  styleUrl: './pos-layout.component.css'
})
export class PosLayoutComponent {

}
