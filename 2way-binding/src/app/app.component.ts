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
  name = ""
  surname = ""
  age = ""
  person: Person = new Person()

  people: Person[] = [

   /*  {name: "frango", surname:"frengo", age:8},
    {name: "pluto", surname:"pippo", age:4} */
  ]
  

  clickButton = () => {
    this.num++
   /*  if(this.num > 0)
      this.buttonDisabled = true */
  }

  changeTitle = () =>{

    this.title = this.title1;
  }

  changeButtonState(){

    if(this.name != "" && this.surname != "" && this.age != "")
          this.buttonDisabled = false
    else
      this.buttonDisabled = true


  }

  addPerson(){

    this.person = new Person(this.name, this.surname, this.age)

    this.people.push(this.person)
    
    console.log(this.people)
    this.name = ""
    this.surname = ""
    this.age = ""
    this.changeButtonState()
  }

  editPerson(){

    
  }

  deletePerson(){


  }

}

