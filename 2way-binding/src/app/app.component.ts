import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unclepear'
  num = 0
  buttonDisabled: boolean = false

  clickButton = () => {
    this.num++
    if(this.num > 0)
      this.buttonDisabled = true
  }

}

