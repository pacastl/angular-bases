import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],})


export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string>=new EventEmitter();

  onDeleteCharacter(id?: string): void {

    // Si no recibemos un id no hacemos nada
    if(!id) return;

    this.onDelete.emit(id);
  }
}
