import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IState, ICollectionStore, ICollectionCard } from '../state.model';
import { IItem } from 'src/app/shared/models/search-item.model';
import { ICustomCard } from 'src/app/shared/models/custom-card.model';

const selectCollection: MemoizedSelector<IState, ICollectionStore> =
  createFeatureSelector('collectionStore');

export const selectGetItems: MemoizedSelector<IState, IItem[]> = createSelector(
  selectCollection,
  ({ items }) => items,
);

export const selectGetCustomItems: MemoizedSelector<IState, ICustomCard[]> =
  createSelector(selectCollection, ({ customCards }) => customCards);


/*не разобралась в чем проблема несовпадения типов, поэтому не прдвинулась дальше*/
export const selectGetCollection: MemoizedSelector<IState, ICollectionCard[]> =
  createSelector(selectCollection, ({ customCards, items }) => [
    ...customCards.map((item) => ({ item, isCustom: true })),
    ...items.map((item) => ({ item, isCustom: false })),
  ]);
