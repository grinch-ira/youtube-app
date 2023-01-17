import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  ICustomCard,
  CustomCard,
} from 'src/app/shared/models/custom-card.model';
import { pushCustomItem } from 'src/app/redux/actions/collection.actions';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  cardForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    description: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
  });

  constructor(private store: Store) {}

  public onSubmit(): void {
    const { title, description, imageUrl, link } = this.cardForm.value;
    const item: ICustomCard = new CustomCard(
      title,
      description,
      imageUrl,
      link,
    );
    alert('Карточка создана!');
    this.store.dispatch(pushCustomItem({ item }));
    this.cardForm.setValue({
      title: '',
      description: '',
      imageUrl: '',
      link: '',
    });
    console.log('onSubmit');
  }
}
