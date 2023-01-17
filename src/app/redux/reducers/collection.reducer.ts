import { ICollectionStore } from '../state.model';
import * as collectionActions from '../actions/collection.actions';
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';

const initialState: ICollectionStore = {
  items: [],
  customCards: [],
};

const reducer: ActionReducer<ICollectionStore> = createReducer(
  initialState,
  on(collectionActions.pushToCollection, (store, { items }): ICollectionStore => ({
    ...store,
    items: [...store.items, ...items],
  })),
  on(collectionActions.setNewCollection, (store, { items }): ICollectionStore => ({
    ...store,
    items,
  })),
  on(collectionActions.pushCustomItem, (store, { item }): ICollectionStore => ({
    ...store,
    customCards: [...store.customCards, item],
  })),
);

export function collectionReducer(
  state: ICollectionStore,
  action: Action,
): ICollectionStore {
  return reducer(state, action);
}



