import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-norris';
}

// Search by key component (2) - should perform a get request (via service) with the user input - after the user clicks on the button OR 1 second after the user finished typing.
//     The returned data (joke list) should be displayed on the screen inside a table - collapsed.
