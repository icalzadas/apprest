import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminTopBarComponent } from '../../shared/components/admin-top-bar/admin-top-bar.component';
import { LeftSidebarComponent } from '../../shared/components/left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminTopBarComponent, LeftSidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
