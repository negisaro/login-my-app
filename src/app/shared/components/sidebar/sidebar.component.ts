import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private authService = inject( AuthService );

  public user = computed(() => this.authService.currentUser() );

  onLogout() {
    this.authService.logout();
  }

  public sidebarItems = [
    { label: 'Listado Productos', icon: 'label', url: '/list-product' },
    { label: 'Añadir Productos', icon: 'add', url: './add-product' },
  ];

}
