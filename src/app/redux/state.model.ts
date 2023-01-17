import { IItem } from '../shared/models/search-item.model';
import { ICustomCard } from '../shared/models/custom-card.model';



export interface ICollectionCard {
  item: IItem | ICustomCard;
  isCustom: boolean;
}

export interface ICollectionStore {
  items: IItem[];
  customCards: ICustomCard[];
}

export interface IState {
  collectionStore: ICollectionStore;
}
