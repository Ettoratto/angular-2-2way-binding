import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title1 = ''
  title = 'unclepear'
  num = 0
  buttonDisabled: boolean = false

  clickButton = () => {
    this.num++
    if(this.num > 0)
      this.buttonDisabled = true
  }

  changeTitle(){

    this.title = this.title1;
  }

}

