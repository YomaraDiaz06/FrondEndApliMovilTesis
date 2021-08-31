import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Ingresar', url: '/login', icon: 'person' },
    { title: 'Contáctanos', url: '/contact', icon: 'call' },
    { title: 'Soluciones', url: '/solutions', icon: 'hammer' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archivos', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
