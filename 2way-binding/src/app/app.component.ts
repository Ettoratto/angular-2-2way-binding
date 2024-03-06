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
  person: Person | null = null;
  editingPerson: Person | null = null;
  isEditing: boolean = false;

  buttonHidden: boolean = true

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
    this.clearFields()
    this.changeButtonState()
  }

  editPerson(person: Person) {
    this.buttonHidden = false

    this.editingPerson = person
    this.name = person.name
    this.surname = person.surname
    this.age = person.age
    this.isEditing = true
  }

  saveEditedPerson() {
    if (this.editingPerson) {
      this.editingPerson.name = this.name
      this.editingPerson.surname = this.surname
      this.editingPerson.age = this.age
      console.log('Edited person:', this.editingPerson)
      this.clearFields()
      this.isEditing = false
    }
  }

  cancelEdit() {
    this.clearFields();
    this.isEditing = false;
  }

  deletePerson(person: Person) {
    const index = this.people.indexOf(person)
    if (index !== -1) {
      this.people.splice(index, 1) // Remove the person from the array
      console.log('Deleted person:', person)
    }
  }

  clearFields() {
    this.name = "";
    this.surname = "";
    this.age = "";
  }
}



