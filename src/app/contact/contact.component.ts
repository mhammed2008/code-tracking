import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  floating(label: HTMLElement, input: HTMLInputElement) {
    console.log(label);
    if (input.value.length < 1) {
      label.classList.remove('active');
    } else {
      label.classList.add('active');
    }
  }
}
