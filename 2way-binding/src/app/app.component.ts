import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Person } from './model/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title1 = ''
  title = 'unclepear'
  num = 0
  buttonDisabled: boolean = true

  person2: Person = {

    name:"gigu", surname: "kriks", age:"12"
  }
  person: Person = new Person()

  people: Person[] = [

   /*  {name: "frango", surname:"frengo", age:"18"},
    {name: "pluto", surname:"pippo", age:"44"} */
  ]
  

  clickButton = () => {
    this.num++
   /*  if(this.num > 0)
      this.buttonDisabled = true */
  }

  changeTitle = () =>{

    this.title = this.title1;
  }

  unlockButton(){

    if(this.person.name != "")
      if(this.person.surname != "")
        if(this.person.age != "")
          this.buttonDisabled = false
  }

  addPerson(){
    
    this.people.push(this.person)
  }

  editPerson(){

  }

  deletePerson(){


  }

}

