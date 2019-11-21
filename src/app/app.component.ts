import {Component, OnDestroy, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {PersonsApiService} from "./shared/services/persons-api.service";
import {Person} from "./shared/models/person.model";
import {PersonsService} from "./shared/services/persons.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'js3lab15';
  persons: /*Person[] = []*/any;
  constructor(private personsService: PersonsService) { /* в конструкторе не очень хорошо проводить инициализации */
    console.log("Constructor");
  }

  async ngOnInit() { /* лучше инициализировать здесь */
    this.persons = this.personsService.persons;
    // console.log("init");
    /*try {
      let gpersons = this.personsService.getPersons();
      this.persons = (isNullOrUndefined(await gpersons)) ? [] : await gpersons;
      console.log(this.persons);
    } catch (err) {
      console.log(err);
    }*/

  }

  ngOnDestroy(): void {
  }

  /*async on_add_person (person: Person) {
    person.id = (this.persons.length)
      ? this.persons[this.persons.length - 1].id + 1
      : 1;
    this.persons.push(person);
    try {
      await this.personsService.postPersons({
        firstname: person.firstname, lastname: person.lastname, phone: person.phone});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_edit_person (ed_person: Person) {
    Object.assign (this.persons.find((element, index, array) => {
      return (element.id === ed_person.id)
    }), ed_person);
    try {
      await this.personsService.putPersons(ed_person.id, {
        firstname: ed_person.firstname, lastname: ed_person.lastname, phone: ed_person.phone});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_del_person (del_person_id: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find((element, index, array) => {
      return (element.id === del_person_id)
    })), 1); /!* удалили из массива элемент *!/
    try {
      await this.personsService.deletePersons(del_person_id);
    }
    catch (e) {
      console.error(e);
    }
  }*/

}
