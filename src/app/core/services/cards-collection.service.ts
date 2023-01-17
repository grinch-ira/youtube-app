import { Injectable } from '@angular/core';
import { IItem } from 'src/app/shared/models/search-item.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class CardsCollectionService {

  private cards: BehaviorSubject<IItem[]> = new BehaviorSubject<IItem[]>([]);


  public getCards(): BehaviorSubject<IItem[]> {
    return this.cards;
  }

  public addNewItems(cards: IItem[]): void {
    this.cards.next(cards);
  }


}
