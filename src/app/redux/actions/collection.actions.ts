import { createAction, props, ActionCreator } from '@ngrx/store';
import { IItem } from 'src/app/shared/models/search-item.model';
import { ICustomCard } from 'src/app/shared/models/custom-card.model';
import { TypedAction } from '@ngrx/store/src/models';

export const pushToCollection:
ActionCreator<'ADD_ITEMS',
(props: { items: IItem[] }) => { items: IItem[] } & TypedAction<'ADD_ITEMS'>
> = createAction('ADD_ITEMS', props<{ items: IItem[] }>());

export const setNewCollection: ActionCreator<
'SET_NEW_COLLECTION',
(props: {  items: IItem[];
}) => { items: IItem[] } & TypedAction<'SET_NEW_COLLECTION'>
> = createAction('SET_NEW_COLLECTION', props<{ items: IItem[] }>());

export const pushCustomItem: ActionCreator<
'ADD_CUSTOM_ITEMS',
(props: {
  item: ICustomCard;
}) => { item: ICustomCard } & TypedAction<'ADD_CUSTOM_ITEMS'>
> = createAction('ADD_CUSTOM_ITEMS', props<{ item: ICustomCard }>());
