import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class InputComponent {
  @Input() type: string;
  @Input() placeholder: string;

  constructor() {}
}
