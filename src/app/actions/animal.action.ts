import { Animal } from '../interfaces/animal'

export class AddAnimal {
    static readonly type = '[ANIMAL] Add'

    constructor(public payload : Animal) { }
}

export class RemoveAnimal {
    static readonly type = '[ANIMAL] Remove'
    
    constructor(public payload: string) { }
}