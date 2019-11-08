import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddAnimal, RemoveAnimal } from './actions/animal.action'
import { Animal } from './interfaces/animal';
import { Observable } from 'rxjs/internal/Observable';
import { AnimalState } from './state/animal.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngxs-app';

  // animals$: Observable<Animal>
  
  @Select(AnimalState.getAnimals) animals$: Observable<Animal>

  constructor(private store: Store) { 
    // this.animals$ = this.store.select(state => state.animals.animals)
  }

  addAnimal(name, height) {
    this.store.dispatch(new AddAnimal({name: name, height: height}))
  }

  delAnimal(name) {
    this.store.dispatch(new RemoveAnimal(name))
  }

  ngOnInit() {
  }
}
