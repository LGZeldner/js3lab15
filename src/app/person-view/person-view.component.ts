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
  /*@Output() editPerson = new EventEmitter<Person>();
  editForm: FormGroup;
  disabled_form = false;*/
  constructor() { }

  ngOnInit() {
    // console.log(this.inPerson);
    /*this.editForm = new FormGroup( {
      firstname: new FormControl({value: '', disabled: this.disabled_form}, [Validators.required]),
      lastname: new FormControl({value: '', disabled: this.disabled_form}, [Validators.required]),
      phone: new FormControl({value: '', disabled: this.disabled_form}, [Validators.required])
    })*/
  }

  on_del_person () {
    this.delPerson.emit(this.inPerson.id);
  }

}
