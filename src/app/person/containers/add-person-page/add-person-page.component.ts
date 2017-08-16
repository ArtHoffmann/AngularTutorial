import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Person } from 'app/models/person';
import { PersonService } from 'app/services';

@Component({
  selector: 'app-add-person-page',
  templateUrl: './add-person-page.component.html',
  styleUrls: ['./add-person-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPersonPageComponent implements OnInit {
  valid$ = new BehaviorSubject<boolean>(false);

  constructor(
    private _personService: PersonService
  ) { }

  ngOnInit() {
  }

  handleValid(event: boolean) {
    console.log(event);
    this.valid$.next(event);
  }

  handleSubmit(data: Person) {
    this._personService.createPerson(data)
      .subscribe(
      result => {
        console.log(JSON.stringify(result));
      },
      error => {
        console.log('Absturz');
      });
  }
}