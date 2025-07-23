import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
import { LeftSidebarComponent } from '../../shared/components/left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TopBarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
