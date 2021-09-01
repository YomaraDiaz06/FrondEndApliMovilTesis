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
    { title: 'Usuario cliente', url: '/userclient', icon: 'person' },
    { title: 'Técnico', url: '/usertechnical', icon: 'person' },
    { title: 'clienteComentarios', url: '/usercomment', icon: 'person' },
    { title: 'TécnicoComentarios', url: '/Technicalcomment', icon: 'person' },
    
  ];
  constructor() {}
}
