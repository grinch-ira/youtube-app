import { IState } from '../state.model';
import { ActionReducerMap } from '@ngrx/store';
import { collectionReducer } from './collection.reducer';

export const reducers: ActionReducerMap<IState> = {
  collectionStore: collectionReducer,
};
