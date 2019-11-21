import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() inPerson: Person; /* получаем доступ сверху */
  @Output() delPerson = new EventEmitter<number>(); /* отправляем наверх */
  constructor() { }

  ngOnInit() {
    // console.log(this.inPerson);
  }

  on_del_person () {
    this.delPerson.emit(this.inPerson.id);
  }

}
