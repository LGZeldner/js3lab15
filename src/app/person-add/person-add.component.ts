import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from "../shared/models/person.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonsService} from "../shared/services/persons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  // @Output() addperson = new EventEmitter<Person>(); /* сделали событие */
  id: number;
  // selectedItem;
  addForm: FormGroup;
  disabled_form = false;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private personsServise: PersonsService) {
    this.activatedRouter.params.subscribe(param => {
      if (!isNullOrUndefined(param)) this.id = param.id;
      else this.id = 0;
    });
  }

  ngOnInit() {
    this.addForm = new FormGroup( {
      firstname: new FormControl({value: '', disabled: this.disabled_form}, [Validators.required]),
      lastname: new FormControl({value: '', disabled: this.disabled_form}, [Validators.required]),
      phone: new FormControl({value: '', disabled: this.disabled_form}, [Validators.required])
    })
  }
  test(elm) {
    console.log(elm);
  }
  on_save() {
    if (this.id) {
      let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname, this.addForm.value.phone, this.id);
      this.personsServise.on_edit_person(person);
    }
    else {
      let person = new Person (this.addForm.value.firstname, this.addForm.value.lastname, this.addForm.value.phone);
      this.personsServise.on_add_person(person);
    }
    this.router.navigate([`/list`]);
    // this.addperson.emit(person);

  }
}
