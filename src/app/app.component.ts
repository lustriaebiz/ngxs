import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from './actions/animal.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngxs-app';

  constructor(private store: Store) { }

  addAnimal(name, height) {
    this.store.dispatch(new AddAnimal({name: name, height: height}))
  }

  ngOnInit() {
  }
}
