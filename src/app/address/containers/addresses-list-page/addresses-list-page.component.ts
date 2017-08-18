import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addresses-list-page',
  templateUrl: './addresses-list-page.component.html',
  styleUrls: ['./addresses-list-page.component.css']
})
export class AddressesListPageComponent implements OnInit {
  personId$: Observable<number>;
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.personId$ = this._route.parent.parent.
      paramMap.map(p => p.get('id'))
      .map(v => +v);
  }

}
