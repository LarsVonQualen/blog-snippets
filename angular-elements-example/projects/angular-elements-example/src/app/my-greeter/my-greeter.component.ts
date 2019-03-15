import { Component, Input } from '@angular/core';

@Component({
  // The selector becomes obsolete. Unless you intend to use the component in
  // a Angular context.
  selector: 'app-my-greeter',
  template: `
    <h1>Hello {{ lastName }}, {{ firstName }}</h1>
  `
})
export class MyGreeterComponent {
  @Input() public firstName: string;
  @Input() public lastName: string;
}
