import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  // Inyectamos el servicio
  constructor(private dbzService: DbzService) { }

  // Sin ... al modificar estos characters, se modifican los datos del servicio también
  // Es decir, sin ... Un cambio aquí afecta al objeto
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
