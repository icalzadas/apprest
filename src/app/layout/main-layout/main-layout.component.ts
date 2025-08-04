import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTopBarComponent } from '../../shared/components/top-bar/main-top-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MainTopBarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
