import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id:uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {

    // Propaga todas las propiedades de character y esparcelas en el nuevo objeto que creamos
    const newCharacter: Character = { id: uuid(),...character}

    // Añade el personaje al final del array
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById(id:string){
    // Filtra todos los personajes que no coincidan con el id
    this.characters=this.characters.filter(character=>character.id!==id)
  }
}
