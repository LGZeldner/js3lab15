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

  }

  ngOnDestroy(): void {
  }

}
