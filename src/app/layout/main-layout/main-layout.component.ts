import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TopBarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
