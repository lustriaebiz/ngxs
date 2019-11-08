import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Animal } from "../interfaces/animal";
import { AddAnimal, RemoveAnimal } from '../actions/animal.action'



@State<AnimalStateModel>({
    name: 'animals',
    defaults: {
        animals: []
    }
})

export class AnimalState {

    // Section 4
    @Selector()
    static getTutorials(state: AnimalStateModel) {
        return state.animals
    }

    // Section 5
    @Action(AddAnimal)
    add({getState, patchState }: StateContext<AnimalStateModel>, { payload }:AddAnimal) {
        const state = getState();
        patchState({
            animals: [...state.animals, payload]
        })
    }

    @Action(RemoveAnimal)
    remove({getState, patchState }: StateContext<AnimalStateModel>, { payload }:RemoveAnimal) {
        patchState({
            animals: getState().animals.filter(a => a.name != payload)
        })
    }

}

export class AnimalStateModel {
    animals: Animal[];
}